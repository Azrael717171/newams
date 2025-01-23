import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-override',
  templateUrl: './override.component.html',
  styleUrls: ['./override.component.css']
})
export class OverrideComponent {
  overrides: any[] = [];
    formData: any = {
        branch: '',
        department: '',
        employee: '',
        nature: '',
        date: '',
        time: '',
        reason: '',
    };
overrideForm: any;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.getOverrides();
    }

    getOverrides(): void {
        this.http.get('http://localhost:5000/overrides').subscribe((data: any) => {
            this.overrides = data;
        });
    }

    addOverride(): void {
        this.http.post('http://localhost:5000/overrides', this.formData).subscribe(() => {
            this.getOverrides();
            this.resetForm();
        });
    }

    editOverride(id: string, updatedData: any): void {
        this.http.put(`http://localhost:5000/overrides/${id}`, updatedData).subscribe(() => {
            this.getOverrides();
        });
    }

    deleteOverride(id: string): void {
        this.http.delete(`http://localhost:5000/overrides/${id}`).subscribe(() => {
            this.getOverrides();
        });
    }

    resetForm(): void {
        this.formData = {
            branch: '',
            department: '',
            employee: '',
            nature: '',
            date: '',
            time: '',
            reason: '',
        };
    }
}
