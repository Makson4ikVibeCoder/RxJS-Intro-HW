import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Course } from './course.interface';
import { CourseManagerService } from './course-manager.service';

@Component({
  selector: 'app-courses-manager-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './courses-manager-page.component.html',
  styleUrls: ['./courses-manager-page.component.css']
})
export class CoursesManagerPageComponent implements OnInit {
  courses$!: Observable<Course[]>;
  courseForm!: FormGroup;

  constructor(
    private courseManagerService: CourseManagerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.courses$ = this.courseManagerService.getCourses();
    
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  addCourse(): void {
    if (this.courseForm.valid) {
      this.courseManagerService.addCourse(this.courseForm.value);
      this.courseForm.reset();
    }
  }

  deleteCourse(id: number): void {
    this.courseManagerService.deleteCourse(id);
  }
}