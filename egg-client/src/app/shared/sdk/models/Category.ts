/* tslint:disable */
import {
  Product
} from '../index';

declare var Object: any;
export interface CategoryInterface {
  "name": string;
  "id"?: any;
  products?: Product[];
}

export class Category implements CategoryInterface {
  "name": string;
  "id": any;
  products: Product[];
  constructor(data?: CategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Category`.
   */
  public static getModelName() {
    return "Category";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Category for dynamic purposes.
  **/
  public static factory(data: CategoryInterface): Category{
    return new Category(data);
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
      name: 'Category',
      plural: 'Categories',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        products: {
          name: 'products',
          type: 'Product[]',
          model: 'Product'
        },
      }
    }
  }
}
