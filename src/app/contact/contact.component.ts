/*
 Title: contact.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/20/2022
 Description: Assignment 5.4 - Dialogs
Resources: Material Design https://material.io
*/



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

   contactUs: string;

  constructor() {
    this.contactUs = "Contact Us"

  }

  ngOnInit(): void {
  }

}
