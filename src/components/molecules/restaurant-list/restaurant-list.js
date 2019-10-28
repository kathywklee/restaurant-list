import { Button } from '../../atoms/button';

export const RestaurantList = ({
  isLoading,
  list,

  fetchList,
}) => (
  <div>
    {console.log('isLoading', isLoading)}
    {console.log(list)}
    {isLoading ? <div>Is loading</div> : <div>Loaded</div>}
    <Button onClick={fetchList}>Load RL</Button>
  </div>
);
