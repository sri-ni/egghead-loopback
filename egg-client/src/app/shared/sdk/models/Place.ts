/* tslint:disable */

declare var Object: any;
export interface PlaceInterface {
  "name": string;
  "id"?: any;
}

export class Place implements PlaceInterface {
  "name": string;
  "id": any;
  constructor(data?: PlaceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Place`.
   */
  public static getModelName() {
    return "Place";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Place for dynamic purposes.
  **/
  public static factory(data: PlaceInterface): Place{
    return new Place(data);
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
      name: 'Place',
      plural: 'Places',
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
      }
    }
  }
}
