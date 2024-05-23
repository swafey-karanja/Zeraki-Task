export class Collection {
  id: number;
  collectionNumber: string;
  date: Date;
  status: string; // Valid, Bounced
  amount: number;
  invoiceId: number;

  constructor(
    id: number,
    collectionNumber: string,
    date: Date,
    status: string,
    amount: number,
    invoiceId: number
  ) {
    this.id = id;
    this.collectionNumber = collectionNumber;
    this.date = date;
    this.status = status;
    this.amount = amount;
    this.invoiceId = invoiceId;
  }
}
