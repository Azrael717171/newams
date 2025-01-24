import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Override {
time: any;
  _id: string;
  employee: string;
  date: string;
  nature: string;
  department: string;
  createdBy: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class OverrideService {
  private apiUrl = 'http://localhost:5000/overrides';

  constructor(private http: HttpClient) { }

  // Get all overrides
  getOverrides(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add a new override
  addOverride(override: any): Observable<any> {
    return this.http.post(this.apiUrl, override);
  }

  // Delete an override
  deleteOverride(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
