import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent implements OnInit, OnDestroy {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  constructor(
    private customerService: CustomersService,
    private routerService: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customerService.update(this.form);
      this.routerService.navigate(['../..'], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  subs: Subscription[] = [];
  ngOnInit(): void {
    const sub = this.activatedRoute.params
      .pipe(switchMap((params) => this.customerService.getById(params['id'])))
      .subscribe((customer) => {
        this.form = customer;
      });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
