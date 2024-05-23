import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {
  school: any;
  invoices: any[] = [];
  collections: any[] = [];
  schoolBalance: number = 0;

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    // Fetch school details based on the selected school ID
    this.fetchSchoolDetails(1); // Replace 1 with the actual school ID
  }

  fetchSchoolDetails(schoolId: number) {
    this.schoolService.getSchools().subscribe(
      (data: any[]) => {
        this.school = data.find((school) => school.id === schoolId);
        this.fetchInvoices(schoolId);
        this.fetchCollections(schoolId);
      },
      (error) => {
        console.error('Error fetching school details:', error);
      }
    );
  }

  fetchInvoices(schoolId: number) {
    this.schoolService.getInvoices(schoolId).subscribe(
      (data: any[]) => {
        this.invoices = data;
        this.calculateSchoolBalance();
      },
      (error) => {
        console.error('Error fetching invoices:', error);
      }
    );
  }

  fetchCollections(schoolId: number) {
    this.schoolService.getCollections(schoolId).subscribe(
      (data: any[]) => {
        this.collections = data;
        this.calculateSchoolBalance();
      },
      (error) => {
        console.error('Error fetching collections:', error);
      }
    );
  }

  calculateSchoolBalance() {
    const totalInvoices = this.invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
    const totalCollections = this.collections.reduce((sum, collection) => sum + collection.amount, 0);
    this.schoolBalance = totalInvoices - totalCollections;
  }
}
