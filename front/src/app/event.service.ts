import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment'; 

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = `${environment.apiUrl}/event`

  constructor(private http: HttpClient) { }

  createEvent(eventData: any) {
    return this.http.post(`${this.apiUrl}`, eventData);
  }

  getEventsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/category/${category}`);
  }

  getEventById(eventId: string): Observable<any> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.get<any>(url);
  }


  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }





}