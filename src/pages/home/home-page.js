import { Page } from '../../components/page';

import { RestaurantList } from '../../components/molecules/restaurant-list';

export const HomePage = props => (
  <Page>
    <blockquote>{props.translateFormattedHTML('content')}</blockquote>

    <hr />

    <RestaurantList />
  </Page>
);
