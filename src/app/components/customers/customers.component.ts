import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;

  firstNameTerm: string = '';
  lastNameTerm: string = '';
  phoneTerm: string = '';

  constructor(private customerService: CustomersService) {
    this.customers$ = this.customerService.getAll();
  }

  remove(id?: string) {
    if (!id) {
      return;
    }

    if (confirm('Are you sure you want to delete?')) {
      this.customerService.remove(id);
    }
  }
  ngOnInit(): void {}
}
