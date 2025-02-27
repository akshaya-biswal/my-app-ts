import useCounterStore from "../store/useCounterStore";
import CounterValue from "./CounterValue";

const Counter = () => {
  const value = useCounterStore();
  console.log(value);

  const { inc, dec, reset } = useCounterStore();

  return (
    <>
      <CounterValue />
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
