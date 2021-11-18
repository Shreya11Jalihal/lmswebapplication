import { Component, OnInit } from '@angular/core';
import {CourseService} from "./shared/CourseService";
import { Course } from './shared/Course.model';
import { Schedule } from './shared/Schedule.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Learning Management System';

  displayedColumns: string[] = ['courseId','name','instructor','price','schedules'];
  dataSource : Course[];
 
  constructor(private courseService: CourseService) { }

  courses:Course[];
  availableDates: Schedule[];


  ngOnInit(): void {
    this.loadCourses();
  }

 loadCourses() {
    this.courseService.getCourses()
      .subscribe(data => {
        console.log(data)
        this.dataSource = data;
        if(data!=null)
        this.availableDates = data[0].availableDates;
        console.log(this.availableDates)
      })      
  }

}
