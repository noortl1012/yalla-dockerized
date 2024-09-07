// registration.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment'; 

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private apiUrl = '${environment.apiUrl}/organisateur';
  private apiUrl1 = '${environment.apiUrl}/participant';

  constructor(private http: HttpClient) {}

  registerorganisateur(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  registerparticipant(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl1}`, user);
  }

  register(userData: { username: string, password: string }) {
    // Define the endpoint to your backend API for registering users
    const apiUrl = '${environment.apiUrl}/compte/register';

    // Make an HTTP POST request to the backend API
    return this.http.post<any>(apiUrl, userData);
  }
  
}
