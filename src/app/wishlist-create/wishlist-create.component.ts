/*
 Title: wishlist-create.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/26/2022
 Description: Assignment 6.2 - Output Properties
 Resources: Material Design https://material.angular.io/components
*/



import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';



@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

   item: IWishlistItem

   @Output()addItemEmitter = new EventEmitter<IWishlistItem>()

  constructor() {
     this.item = {} as IWishlistItem


  }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors

    });
    this.item = {} as IWishlistItem;
  }

}
