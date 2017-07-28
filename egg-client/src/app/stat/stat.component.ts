import { Component, OnInit } from '@angular/core';

import { Product, Category, Place } from '../shared/sdk/models';
import { ProductApi, CategoryApi, PlaceApi } from '../shared/sdk/services';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  private products: [Product];
  private categories: [Category];
  private places: [Place];

  constructor(
    private productApi: ProductApi,
    private categoryApi: CategoryApi,
    private placeApi: PlaceApi
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.getPlaces();
  }

  getProducts() {
    this.productApi.find().subscribe((products: [Product]) => {
      this.products = products;
      console.log('this.products = ', this.products);
    });
  }

  getCategories() {
    this.categoryApi.find().subscribe((categories: [Category]) => {
      this.categories = categories;
      console.log('this.categories = ', this.categories);
    });
  }

  getPlaces() {
    this.placeApi.find().subscribe((places: [Place]) => {
      this.places = places;
      console.log('this.places = ', this.places);
    });
  }
}
