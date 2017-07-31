import { Component, OnInit } from '@angular/core';

import { Product, Category, Place, Population } from '../shared/sdk/models';
import {
  ProductApi,
  CategoryApi,
  PlaceApi,
  PopulationApi
} from '../shared/sdk/services';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  private products: [Product];
  private categories: [Category];
  private places: [Place];
  private populations: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'City';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(
    private productApi: ProductApi,
    private categoryApi: CategoryApi,
    private placeApi: PlaceApi,
    private populationApi: PopulationApi
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.getPlaces();
    this.getPopulations();
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

  getPopulations() {
    this.populationApi.find().subscribe((populations: [Population]) => {
      populations.map(function(pop) {
        pop['name'] = pop.city;
        pop['value'] = pop.population;
      });
      this.populations = [
        {
          name: 'Population',
          series: populations
        }
      ];
      console.log('this.populations = ', this.populations);
    });
  }

  onSelect(event) {
    console.log(event);
  }
}
