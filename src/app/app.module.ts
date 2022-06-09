import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { ParagraphCapitalPipe } from './pipes/paragraph-capital.pipe';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignWithGoogleDirective } from './directives/sign-with-google.directive';
import { SignoutDirective } from './directives/signout.directive';
import { FilterCustomersPipe } from './pipes/filter-customers.pipe';
import { FilterCustomers2Pipe } from './pipes/filter-customers2.pipe';
import { FilterContactsPipe } from './pipes/filter-contacts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    ContactsComponent,
    PageHeaderComponent,
    ParagraphCapitalPipe,
    CustomersComponent,
    PageNotFoundComponent,
    CustomersNewComponent,
    CustomersDetailsComponent,
    CustomersEditComponent,
    LoginComponent,
    DashboardComponent,
    SignWithGoogleDirective,
    SignoutDirective,
    FilterCustomersPipe,
    FilterCustomers2Pipe,
    FilterContactsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
