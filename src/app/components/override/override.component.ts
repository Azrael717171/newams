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
  
  employees = [
    { id: 1, name: 'Employee 1' },
    { id: 2, name: 'Employee 2' },
  ];
  // Define the correct type here

  newOverride = {
    branch: '',
    department: '',
    employee: '',
    nature: '',
    date: '',
    time: '',
    reason: ''
  };

  constructor(private overrideService: OverrideService) {}

  ngOnInit() {
    this.loadOverrides();  // Load overrides when the component initializes
  }

  loadOverrides() {
    this.overrideService.getOverrides().subscribe((data: Override[]) => {
      this.overrides = data;  // TypeScript now knows the correct structure of the array
    });
  }

  addOverride() {
    this.overrideService.addOverride(this.newOverride).subscribe(() => {
      this.loadOverrides();  // Reload overrides after adding a new one
      this.newOverride = { branch: '', department: '', employee: '', nature: '', date: '', time: '', reason: '' }; // Reset form
    });
  }

  deleteOverride(id: string) {
    this.overrideService.deleteOverride(id).subscribe(() => {
      this.loadOverrides();  // Reload overrides after deletion
    });
  }

  // The editOverride method can be implemented here if needed
  editOverride(id: string) {
    // Implement the edit functionality here
  }
}
