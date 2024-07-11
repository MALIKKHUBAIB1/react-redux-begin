import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  console.log(counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  function handleIncrement() {
    dispatch(counterActions.increment());
  }
  function handleDecrement() {
    dispatch(counterActions.decrement());
  }
  function handleIncrease() {
    dispatch(counterActions.increase(5));
  }

  let actions = <button onClick={handleDecrement}>decrement</button>;
  if (counter <= 0) {
    actions = (
      <button onClick={handleDecrement} disabled>
        decrement
      </button>
    );
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleIncrease}>Incrase By 5</button>
        {actions}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
