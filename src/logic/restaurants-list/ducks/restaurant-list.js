import get from 'lodash/get';

// -------------------------------------------------------------------------------------------------
// Event types
// -------------------------------------------------------------------------------------------------

export const RESTAURANT_LIST_REQUESTED = 'RESTAURANT_LIST_REQUESTED';
export const RESTAURANT_LIST_SUCCEEDED = 'RESTAURANT_LIST_SUCCEEDED';
export const RESTAURANT_LIST_FAILED = 'RESTAURANT_LIST_FAILED';

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

const initialState = {
  list: [],
  error: null,
  isLoading: false,
};

export function restaurantListReducer(state = initialState, action) {
  switch (action.type) {
    case RESTAURANT_LIST_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case RESTAURANT_LIST_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        list: action.payload.restaurantsList,
      };
    case RESTAURANT_LIST_FAILED:
      return {
        ...state,
        list: [],
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

// -------------------------------------------------------------------------------------------------
// Event creators
// -------------------------------------------------------------------------------------------------

export const fetchRestaurantList = ({ restaurantSlug }) => {
  return {
    type: RESTAURANT_LIST_REQUESTED,
    payload: { restaurantSlug },
  };
};

export const fetchRestaurantListSucceeded = ({ restaurantsList }) => {
  return {
    type: RESTAURANT_LIST_SUCCEEDED,
    payload: { restaurantsList },
  };
};

export const fetchRestaurantListFailed = error => {
  return {
    type: RESTAURANT_LIST_FAILED,
    payload: { error },
  };
};

// -------------------------------------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------------------------------------

const rootSelector = state => get(state, 'restaurantsList', initialState);

export const restaurantsListSelector = state => rootSelector(state).list;
export const restaurantsListErrorSelector = state => rootSelector(state).error;
export const restaurantsListIsLoadingSelector = state => rootSelector(state).isLoading;
