import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  today: number = Date.now();

  bookdetails = [
    {
      name: "Ruby",
      IMG:"./assets/img/1.jpeg",
      price:1450,
      discountper:10,
      author:"Rizwan S"
    },
    {
      name: "Javascript",
      IMG:"./assets/img/2.jpeg",
      price:1550,
      discountper:30,
      author:"Rizwan S"
    },
    {
      name: "Jquery",
      IMG:"./assets/img/3.jpeg",
      price:1850,
      discountper:5,
      author:"Rizwan S"


    },
    {
      name: "Bootstrap",
      IMG:"./assets/img/4.jpeg",
      price:2000,
      discountper:20,
      author:"Rizwan S"
    },
    {
      name: "Asp.net",
      IMG:"./assets/img/5.jpeg",
      price:700,
      discountper:10,
      author:"Rizwan S"
    },
    {
      name: "Angular 8",
      IMG:"./assets/img/6.jpeg",
      price:3000,
      discountper:10,
      author:"Rizwan S"
    },
  ];


}
