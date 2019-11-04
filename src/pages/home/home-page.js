import { Page } from '../../components/page';

import { RestaurantList } from '../../components/molecules/restaurant-list';
import { RestaurantSorting } from '../../components/molecules/restaurant-sorting';

export const HomePage = props => (
  <Page>
    <RestaurantSorting />
    <RestaurantList />
  </Page>
);
