/* tslint:disable */
import {
  Category
} from '../index';

declare var Object: any;
export interface ProductInterface {
  "name": string;
  "price": number;
  "categoryId"?: any;
  "id"?: any;
  category?: Category;
}

export class Product implements ProductInterface {
  "name": string;
  "price": number;
  "categoryId": any;
  "id": any;
  category: Category;
  constructor(data?: ProductInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Product`.
   */
  public static getModelName() {
    return "Product";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Product for dynamic purposes.
  **/
  public static factory(data: ProductInterface): Product{
    return new Product(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Product',
      plural: 'Products',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "price": {
          name: 'price',
          type: 'number'
        },
        "categoryId": {
          name: 'categoryId',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        category: {
          name: 'category',
          type: 'Category',
          model: 'Category'
        },
      }
    }
  }
}
