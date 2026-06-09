import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseFilterService {
  private courses: Course[] = [
    { id: 1, title: 'Advanced Python & Selenium', category: 'Development', duration: '12h' },
    { id: 2, title: 'C# Architecture', category: 'Development', duration: '8h' },
    { id: 3, title: 'MongoDB Mastery', category: 'Database', duration: '5h' },
    { id: 4, title: 'PostgreSQL Basics', category: 'Database', duration: '4h' },
    { id: 5, title: 'Arduino Hardware Simulation', category: 'Electronics', duration: '6h' },
    { id: 6, title: 'Digital Logic in Tinkercad', category: 'Electronics', duration: '7h' }
  ];

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }
}
