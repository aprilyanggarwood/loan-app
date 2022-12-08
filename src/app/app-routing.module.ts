/*
 Title: app-routing.module.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/26/2022
 Description: Assignment 6.2 - Output Properties
Resources: Material Design https://material.io
*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';


const routes: Routes = [
  {
    path: '',
    component: LoanCalculatorComponent
  },
  {
    path: 'loan_application',
    component: LoanCalculatorComponent
  },
    {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
