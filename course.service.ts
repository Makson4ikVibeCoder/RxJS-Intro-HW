import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Course } from './course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, title: 'Advanced Python & Selenium', category: 'Development', duration: '12h' },
    { id: 2, title: 'C# Architecture', category: 'Development', duration: '8h' },
    { id: 3, title: 'MongoDB Mastery', category: 'Database', duration: '5h' },
    { id: 4, title: 'Arduino Hardware Simulation', category: 'Electronics', duration: '6h' },
    { id: 5, title: 'Fashion Design & Streetwear', category: 'Design', duration: '4h' }
  ];

  getCourses(query: string): Observable<Course[]> {
    let filteredCourses = this.courses;
    
    if (query && query.trim() !== '') {
      const lowerCaseQuery = query.toLowerCase();
      filteredCourses = this.courses.filter(course => 
        course.title.toLowerCase().includes(lowerCaseQuery)
      );
    }
    
    return of(filteredCourses).pipe(delay(300));
  }
}