/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Product } from '../../models/Product';
import { Category } from '../../models/Category';
import { Place } from '../../models/Place';
import { Population } from '../../models/Population';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Product: Product,
    Category: Category,
    Place: Place,
    Population: Population,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
