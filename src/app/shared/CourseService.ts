import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Course } from './Course.model';


@Injectable({providedIn:'root'})
export class CourseService {
 
  baseURL: string = "http://localhost:8080/api/";
 
  constructor(private http: HttpClient) {
  }
 
  getCourses(): Observable<Course[]> {
    console.log('getCourses '+this.baseURL + 'courses')
    return this.http.get<Course[]>(this.baseURL + 'courses')
  }
 
 
}