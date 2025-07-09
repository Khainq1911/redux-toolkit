import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, reset } from "./pages/counterSlide";
import type { RootState } from "./app/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">Number is {count}</div>
      <div className="card">
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
}

export default App;
