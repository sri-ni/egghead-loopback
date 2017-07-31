/* tslint:disable */

declare var Object: any;
export interface PopulationInterface {
  "city": string;
  "population": number;
  "id"?: any;
}

export class Population implements PopulationInterface {
  "city": string;
  "population": number;
  "id": any;
  constructor(data?: PopulationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Population`.
   */
  public static getModelName() {
    return "Population";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Population for dynamic purposes.
  **/
  public static factory(data: PopulationInterface): Population{
    return new Population(data);
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
      name: 'Population',
      plural: 'Populations',
      properties: {
        "city": {
          name: 'city',
          type: 'string'
        },
        "population": {
          name: 'population',
          type: 'number'
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
