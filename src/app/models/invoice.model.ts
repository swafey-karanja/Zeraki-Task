export class Invoice {
  id: number;
  invoiceNumber: string;
  invoiceItem: string;
  creationDate: Date;
  dueDate: Date;
  amount: number;
  paidAmount: number;
  balance: number;
  isCompleted: boolean;
  daysTillDue: number;

  constructor(
    id: number,
    invoiceNumber: string,
    invoiceItem: string,
    creationDate: Date,
    dueDate: Date,
    amount: number,
    paidAmount: number,
    balance: number,
    isCompleted: boolean,
    daysTillDue: number
  ) {
    this.id = id;
    this.invoiceNumber = invoiceNumber;
    this.invoiceItem = invoiceItem;
    this.creationDate = creationDate;
    this.dueDate = dueDate;
    this.amount = amount;
    this.paidAmount = paidAmount;
    this.balance = balance;
    this.isCompleted = isCompleted;
    this.daysTillDue = daysTillDue;
  }
}
