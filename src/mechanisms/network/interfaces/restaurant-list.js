import { restaurantList } from './restaurants-list-mock-data';

// ****************** HERE WE ARE EMULATING THINGS **********************
// code from here will never go to production, as we will make real fetch
// **********************************************************************
import orderBy from 'lodash/orderBy';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getRestaurantListOrderedByMOV = restaurants =>
  orderBy(restaurants, ['info.minimumOrderValue'], ['asc']);


export default class RestaurantListInterface {
  constructor(params = { name: 'Restaurants' }) {
    const { name } = params;

    this.name = name;
  }

  static async fetch() {
    await delay(2000);
    return restaurantList;
  }

  async fetchList() {
    const list = await RestaurantListInterface.fetch();

    return list;
  }
}
