import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = 'http://localhost:3000'; // Update this to the correct URL

  constructor(private http: HttpClient) { }

  getSchools(): Observable<any> {
    return this.http.get(`${this.apiUrl}/schools`);
  }

  getInvoices(schoolId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/invoices?schoolId=${schoolId}`);
  }

  getCollections(schoolId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/collections?schoolId=${schoolId}`);
  }
}
