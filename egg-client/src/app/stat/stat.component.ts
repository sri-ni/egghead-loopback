import {Component, OnInit} from '@angular/core';

import {Product, Category} from '../shared/sdk/models';
import {ProductApi, CategoryApi} from '../shared/sdk/services';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  private products: [Product];
  private categories: [Category];

  constructor(
    private productApi: ProductApi,
    private categoryApi: CategoryApi
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
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
}
