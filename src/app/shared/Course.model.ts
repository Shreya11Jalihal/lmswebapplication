import { Schedule } from './Schedule.model';

export class Course {
    courseId: number;
    name: string;
    instructor: string;
    price : number;
    availableDates: Schedule[]

  }