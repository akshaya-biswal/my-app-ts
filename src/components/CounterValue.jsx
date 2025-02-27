import useCounterStore from "../store/useCounterStore";

const CounterValue = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <>
      <h1>Counter - {count}</h1>
    </>
  );
};

export default CounterValue;
