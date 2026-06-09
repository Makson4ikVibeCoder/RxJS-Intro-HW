import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Course } from './course.interface';
import { CourseFilterService } from './course-filter.service';

@Component({
  selector: 'app-courses-filter-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './courses-filter-page.component.html',
  styleUrls: ['./courses-filter-page.component.css']
})
export class CoursesFilterPageComponent implements OnInit {
  searchControl = new FormControl('');
  categoryControl = new FormControl('');
  
  categories: string[] = ['Development', 'Database', 'Electronics'];
  filteredCourses$!: Observable<Course[]>;

  constructor(private courseFilterService: CourseFilterService) {}

  ngOnInit(): void {
    const courses$ = this.courseFilterService.getCourses();
    const search$ = this.searchControl.valueChanges.pipe(startWith(''));
    const category$ = this.categoryControl.valueChanges.pipe(startWith(''));

    this.filteredCourses$ = combineLatest([courses$, search$, category$]).pipe(
      map(([courses, searchTerm, category]) => {
        return courses.filter(course => {
          const matchesTitle = course.title.toLowerCase().includes((searchTerm || '').toLowerCase());
          const matchesCategory = category ? course.category === category : true;
          return matchesTitle && matchesCategory;
        });
      })
    );
  }
}