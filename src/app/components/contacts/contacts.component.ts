import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  nameTerm: string = '';

  constructor(contactsService: ContactsService) {
    this.contacts = contactsService.getAll();
  }

  ngOnInit(): void {}
}
