import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/*
 Title: loan-calculator.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/11/2022
 Description: Assignment 8.3 - Capstone (Build)
 Resources: Material Design https://material.io
*/




@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss']
})
export class LoanCalculatorComponent implements OnInit {

  // defined variables type
  loanFormCalculator!: FormGroup;
  monthlyPayment: number = 0;
  interest: number = 0;

   loanApp: string;

   /* Initialize Form */
  constructor(private fb: FormBuilder) {
    this.loanApp = "Loan Application"
   }

  ngOnInit(): void {
    this.loanFormCalculator = this.fb.group({
        loanAmount: [ ''],
      interestRate: [ ''],
      numOfYears: [ '']


      // loanAmount: [ '', [ Validators.required, Validators.pattern("^[0-9]*$") ] ],
      // interestRate: [ '', [ Validators.required, Validators.pattern("^[0-9]*$") ] ],
      // numOfYears: [ '', [ Validators.required, Validators.pattern("^[0-9]*$") ] ]

      })
}

    // function for calculating the loan payment and interest
onSubmit(){
  const formValues = this.loanFormCalculator.value;
  const loanAmount = parseFloat(formValues.loanAmount);
  const interestRate = parseFloat(formValues.interestRate.toFixed(2));
  const numOfYears = parseFloat(formValues.numOfYears);

  /* variables  for loan formula calculating */
  const numOfMonths = (numOfYears * 12);
  const ratePerPeriod = ((interestRate / 100) / 12);

  /* Loan rate formula */
  this.monthlyPayment = (loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), numOfMonths))) / (Math.pow((1 + ratePerPeriod), numOfMonths) - 1);
  this.interest = (parseFloat(this.monthlyPayment.toFixed(2)) * numOfMonths) - loanAmount;

// Function to clear entries
  // clearEntries(){
  //   this.monthlyPayment = 0;
  //   this.interest = 0;
  //   this.loanFormCalculator.reset();

  // }

// get form(){
//     return this.loanFormCalculator.controls;
// }



    }
  }



