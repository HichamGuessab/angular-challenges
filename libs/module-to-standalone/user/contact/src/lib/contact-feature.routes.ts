import { Routes } from '@angular/router';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactDashboardComponent } from './dashboard/dashboard.component';

export const CONTACT_FEATURES_ROUTES: Routes = [
  {
    path: '',
    component: ContactDashboardComponent,
  },
  {
    path: 'create-contact',
    component: CreateContactComponent,
  },
];
