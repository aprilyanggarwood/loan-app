/*
 Title: interest.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/11/2022
 Description: Assignment 8.3 - Capstone (Build)
 Resources: Material Design https://material.io
*/



import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {

  @Input() interest!: number;

  constructor() { }

  ngOnInit(): void {
  }

}

