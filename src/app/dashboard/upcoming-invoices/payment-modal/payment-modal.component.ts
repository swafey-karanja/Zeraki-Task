import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Invoice } from '../upcoming-invoices.component';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent {
  @Input() selectedInvoice: Invoice | null = null;
  @Output() paymentCollected = new EventEmitter<boolean>();

  showModal = false;
  paymentAmount: number | null = null;
  paymentMethod: string = '';

  openModal(invoice: Invoice) {
    this.selectedInvoice = invoice;
    this.paymentAmount = invoice.amount;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.paymentAmount = null;
    this.paymentMethod = '';
  }

  collectPayment() {
    // Perform payment processing logic here
    console.log('Payment collected:', this.paymentAmount, this.paymentMethod);

    // Emit an event to notify the parent component
    this.paymentCollected.emit(true);

    this.closeModal();
  }
}
