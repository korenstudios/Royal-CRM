import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Pipe({
  name: 'filterContacts',
})
export class FilterContactsPipe implements PipeTransform {
  transform(
    contacts: Contact[] | null,
    propertyName: keyof Omit<Contact, 'birthday' | 'phones'>,
    searchTerm: string
  ): Contact[] | null {
    if (!contacts) {
      return null;
    }

    const filtered = contacts.filter((contact) =>
      contact[propertyName]?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered;
  }
}
