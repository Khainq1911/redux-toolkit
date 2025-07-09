import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { decrement, increment, reset } from "./counterSlide";

export default function CounterPage() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter page</h1>
      <p>{counter}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
}
