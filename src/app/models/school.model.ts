import { Invoice } from './invoice.model';
import { Collection } from './collection.model';

export class School {
  id: number;
  name: string;
  type: string;
  product: string;
  county: string;
  registrationDate: Date;
  contactInfo: string;
  schoolBalance: number;
  invoices: Invoice[];
  collections: Collection[];

  constructor(
    id: number,
    name: string,
    type: string,
    product: string,
    county: string,
    registrationDate: Date,
    contactInfo: string,
    schoolBalance: number,
    invoices: Invoice[],
    collections: Collection[]
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.product = product;
    this.county = county;
    this.registrationDate = registrationDate;
    this.contactInfo = contactInfo;
    this.schoolBalance = schoolBalance;
    this.invoices = invoices;
    this.collections = collections;
  }
}
