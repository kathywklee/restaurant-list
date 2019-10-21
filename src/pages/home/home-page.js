import { Page } from '../../components/page';
import { Button } from '../../components/atoms/button';
import { Counter } from '../../components/atoms/counter';
import { RestaurantList } from '../../components/molecules/restaurant-list';

export const HomePage = props => (
  <Page>
    <div>{props.translateFormattedHTML('content')}</div>

    <br />

    <Button onClick={() => console.log('Nothing')}>Button doing nothing</Button>
    <Counter />
    <RestaurantList />
  </Page>
);
