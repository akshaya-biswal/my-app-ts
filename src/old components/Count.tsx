import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleIncrement5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prv) => prv + 1);
    }
  };

  return (
    <>
      <h2>Count - {count}</h2>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      <button onClick={handleIncrement5}>Increment 5</button>
    </>
  );
};

export default Count;
