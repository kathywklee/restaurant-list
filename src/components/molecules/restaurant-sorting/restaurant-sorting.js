import React from 'react';

import { Select } from '../../atoms/select';

const createSortingSelectOptions = translate => (sortingTypes, translationMap) =>
  sortingTypes.map(sortingType => ({
    value: sortingType,
    text: translate(translationMap[sortingType]),
    disabled: false,
  }));

export const RestaurantSorting = props => {
  const {
    sortingTypes,
    translationMap,
    selectedSortingType,
    sortRestaurantList,
    isLoading,
    translate,
  } = props;

  const onChangeSorting = event => sortRestaurantList(event.target.value);
  const sortingSelectOptions = createSortingSelectOptions(translate);

  return (
    <Select
      disabled={isLoading}
      label="Select label"
      onChange={onChangeSorting}
      value={selectedSortingType}
      options={sortingSelectOptions(sortingTypes, translationMap)}
    />
  );
};
