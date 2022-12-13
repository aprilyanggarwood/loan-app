/*
 Title: monthly-payment.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/11/2022
 Description: Assignment 8.3 - Capstone (Build)
 Resources: Material Design https://material.io
*/



import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.scss']
})
export class MonthlyPaymentComponent implements OnInit {

    @Input() monthlyPayment!: number;

  constructor() { }


  ngOnInit(): void {
  }

}
