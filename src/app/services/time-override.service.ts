import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeOverrideService {
  private apiUrl = 'http://localhost:3000/overrides';

  constructor(private http: HttpClient) {}

  getOverrides(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addOverride(overrideData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, overrideData);
  }

  deleteOverride(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
