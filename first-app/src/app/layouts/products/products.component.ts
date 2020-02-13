import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  mobParts = [
    {
      name: "Iphone",
      id: 1001,
      inStock: 350,
      prodColor: "red",
      isOnline: true,
      country: "Australia",
      IMG:"./assets/img/1.jpeg",
      proddescription:"1.We did most of the heavy lifting for you to provide a defaul stylings that incorporate our custom components. Additionally, werefined animations and transitions to provide a smoother experiencefor developers."

    },
    {
      name: "Samsung",
      id: 1002,
      inStock: 350,
      prodColor: "blue",
      isOnline: true,
      country: "India",
      IMG:"./assets/img/2.jpeg",
      proddescription:"2.We did most of the heavy lifting for you to provide a defaul stylings that incorporate our custom components. Additionally, werefined animations and transitions to provide a smoother experiencefor developers."

    },
    {
      name: "One Plus Pro",
      id: 1003,
      inStock: 0,
      prodColor: "green",
      isOnline: false,
      country: "Germany",
      IMG:"./assets/img/3.jpeg",
      proddescription:"3.We did most of the heavy lifting for you to provide a defaul stylings that incorporate our custom components. Additionally, werefined animations and transitions to provide a smoother experiencefor developers."
    }
  ];

}
