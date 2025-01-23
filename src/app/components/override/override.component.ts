
import { Component } from '@angular/core';
import { TimeOverrideService } from 'src/app/services/time-override.service';

@Component({
  selector: 'app-override',
  templateUrl: './override.component.html',
  styleUrls: ['./override.component.css']
})
export class OverrideComponent {
  overrides: any[] = [];
  newOverride: any = {
    branch: '',
    department: '',
    employee: '',
    nature: '',
    date: '',
    time: '',
    reason: '',
    createdBy: 'Admin'
  };

  constructor(private overrideService: TimeOverrideService) {}

  ngOnInit(): void {
    this.fetchOverrides();
  }

  fetchOverrides(): void {
    this.overrideService.getOverrides().subscribe((data) => {
      this.overrides = data;
    });
  }

  addOverride(): void {
    this.overrideService.addOverride(this.newOverride).subscribe(() => {
      this.fetchOverrides();
      this.newOverride = {}; // Reset the form
    });
  }

  deleteOverride(id: string): void {
    this.overrideService.deleteOverride(id).subscribe(() => {
      this.fetchOverrides();
    });
  }
}