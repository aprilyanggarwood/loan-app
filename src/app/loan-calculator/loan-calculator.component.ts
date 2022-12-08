import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss']
})
export class LoanCalculatorComponent implements OnInit {

  // defined variables type
  // loanForm!: FormGroup;
  // monthlyPayment: number = 0;
  // interest: number = 0;

loanApp: string;


  constructor() {
    this.loanApp = "Loan Application"
   }

  ngOnInit(): void {


    }
  }



