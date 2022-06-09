import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'filterCustomers2',
})
export class FilterCustomers2Pipe implements PipeTransform {
  transform(
    customers: Customer[] | null,
    propertyName: (keyof Customer)[],
    searchTerm: string
  ): Customer[] | null {
    if (!customers) {
      return null;
    }

    const filtered = customers.filter((customer) => {
      for (const property of propertyName) {
        let isFound = customer[property]
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());
        if (isFound) {
          return isFound;
        }
      }
      return false;
    });

    return filtered;
  }
}
