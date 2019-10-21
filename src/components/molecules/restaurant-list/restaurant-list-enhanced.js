import { connect } from 'react-redux';

import {
  restaurantsListSelector,
  restaurantsListIsLoadingSelector,
  fetchRestaurantList,
} from '../../../logic/restaurants-list/ducks/restaurant-list';

import { RestaurantList } from './restaurant-list';

const mapStateToProps = state => ({
  isLoading: restaurantsListIsLoadingSelector(state),
  list: restaurantsListSelector(state),
});

const mapDispatchToProps = {
  fetchList: fetchRestaurantList,
};

export const RestaurantListEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantList);
