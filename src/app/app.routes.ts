import { Routes } from '@angular/router';
import { HomeComponent } from './modulos/HomeTeste/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-teste-ci-cd', pathMatch: 'full' },
  { path: 'home-teste-ci-cd', component: HomeComponent }
];