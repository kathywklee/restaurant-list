export const RestaurantList = ({
  isLoading,
  list,

  fetchList,
}) => (
  <div>
    {console.log('isLoading', isLoading)}
    {console.log(list)}
    {isLoading ? <div>Is loading</div> : <div>Loaded</div>}
    <button onClick={fetchList}>Load RL</button>
  </div>
);
