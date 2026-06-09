import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from './course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseManagerService {
  private initialCourses: Course[] = [
    { id: 1, title: 'Advanced Python & Selenium', category: 'Development', duration: '12h' },
    { id: 2, title: 'C# Architecture', category: 'Development', duration: '8h' },
    { id: 3, title: 'MongoDB Mastery', category: 'Database', duration: '5h' }
  ];

  private coursesSubject = new BehaviorSubject<Course[]>(this.initialCourses);
  courses$ = this.coursesSubject.asObservable();

  getCourses(): Observable<Course[]> {
    return this.courses$;
  }

  addCourse(course: Omit<Course, 'id'>): void {
    const currentCourses = this.coursesSubject.getValue();
    const newId = currentCourses.length > 0 ? Math.max(...currentCourses.map(c => c.id)) + 1 : 1;
    const newCourse: Course = { id: newId, ...course };
    this.coursesSubject.next([...currentCourses, newCourse]);
  }

  deleteCourse(id: number): void {
    const currentCourses = this.coursesSubject.getValue();
    const updatedCourses = currentCourses.filter(course => course.id !== id);
    this.coursesSubject.next(updatedCourses);
  }
}