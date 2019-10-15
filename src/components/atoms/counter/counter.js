export const Counter = props => (
  <div>
    <h1>
      Count: <span>{props.count}</span>
    </h1>
    <button onClick={props.incrementCount}>+1</button>
    <button onClick={props.decrementCount}>-1</button>
    <button onClick={props.resetCount}>Reset</button>
  </div>
);
