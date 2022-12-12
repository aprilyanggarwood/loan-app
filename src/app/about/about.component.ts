/*
 Title: about.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/11/2022
 Description: Assignment 8.3 - Capstone (Build)
Resources: Material Design https://material.io
*/



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutUs: string;
  constructor() {
    this.aboutUs = "About Us"

  }

  ngOnInit(): void {
  }

}
