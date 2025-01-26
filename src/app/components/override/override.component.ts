import { Component, OnInit } from '@angular/core';
import { OverrideService } from 'src/app/services/time-override.service';
import { Override } from 'src/app/services/time-override.service';
@Component({
  selector: 'app-override',
  templateUrl: './override.component.html',
  styleUrls: ['./override.component.css']
})
export class TimeOverrideComponent implements OnInit {
  overrides: Override[] = [];
  filteredOverrides: Override[] = [];
  searchTerm: string = '';

  employees = [
    { id: 1, name: 'Employee 1' },
    { id: 2, name: 'Employee 2' }
  ];

  newOverride: any = {
    branch: '',
    department: '',
    employee: '',
    nature: '',
    date: '',
    time: '',
    reason: ''
  };

  isEdit: boolean = false;

  constructor(private overrideService: OverrideService) {}

  ngOnInit() {
    this.loadOverrides();
  }

  loadOverrides() {
    this.overrideService.getOverrides().subscribe((data: Override[]) => {
      this.overrides = data;
      this.filteredOverrides = data;
    });
  }

  addOverride() {
    if (this.isEdit) {
      this.overrideService.updateOverride(this.newOverride).subscribe(() => {
        this.loadOverrides();
        this.resetForm();
      });
    } else {
      this.overrideService.addOverride(this.newOverride).subscribe(() => {
        this.loadOverrides();
        this.resetForm();
      });
    }
  }

  editOverride(id: string) {
    this.isEdit = true;
    const override = this.overrides.find(o => o._id === id);
    if (override) {
      this.newOverride = { ...override };
    }
  }

  deleteOverride(id: string) {
    this.overrideService.deleteOverride(id).subscribe(() => {
      this.loadOverrides();
    });
  }

  resetForm() {
    this.newOverride = {
      branch: '',
      department: '',
      employee: '',
      nature: '',
      date: '',
      time: '',
      reason: ''
    };
    this.isEdit = false;
  }

  filterOverrides() {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredOverrides = this.overrides.filter(override => 
      override.employee.toLowerCase().includes(searchTermLower) ||
      override.nature.toLowerCase().includes(searchTermLower) ||
      override.reason.toLowerCase().includes(searchTermLower) ||
      override.createdBy.toLowerCase().includes(searchTermLower) ||
      override.date.toLowerCase().includes(searchTermLower)
    );
  }

}
