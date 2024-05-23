import { Component, OnInit } from '@angular/core';
import { OrderByPipe } from './order-by.pipe';

export interface Invoice {
  school: string;
  amount: number;
  dueDate: Date;
}

@Component({
  selector: 'app-upcoming-invoices',
  templateUrl: './upcoming-invoices.component.html',
  styleUrls: ['./upcoming-invoices.component.css']
})
export class UpcomingInvoicesComponent implements OnInit {
  upcomingInvoices: Invoice[] = [
    { school: 'ABC School', amount: 5000, dueDate: new Date('2024-05-25') },
    { school: 'XYZ School', amount: 8000, dueDate: new Date('2024-05-28') },
    { school: 'PQR School', amount: 3500, dueDate: new Date('2024-06-01') }
  ];

  selectedInvoice: Invoice | null = null;

  constructor() { }

  ngOnInit() {
    // Fetch data from a service or perform any other initialization logic
  }

  openPaymentModal(invoice: Invoice) {
    this.selectedInvoice = invoice;
  }

  handlePaymentCollected(paymentCollected: boolean) {
    if (paymentCollected) {
      console.log('Payment collected successfully!');
      // Perform any additional actions after payment collection
    }
  }
}
