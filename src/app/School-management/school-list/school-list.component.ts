import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: any[] = [];

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.fetchSchools();
  }

  fetchSchools() {
    this.schoolService.getSchools().subscribe(
      (data: any[]) => {
        this.schools = data;
      },
      (error) => {
        console.error('Error fetching schools:', error);
      }
    );
  }
}
