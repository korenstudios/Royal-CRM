import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'filterCustomers',
})
export class FilterCustomersPipe implements PipeTransform {
  transform(
    customers: Customer[] | null,
    propertyName: keyof Customer,
    searchTerm: string
  ): Customer[] | null {
    if (!customers) {
      return null;
    }

    const filtered = customers.filter((customer) =>
      customer[propertyName]?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered;
  }
}
