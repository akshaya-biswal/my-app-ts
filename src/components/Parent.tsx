import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child Render");
  return <button onClick={onClick}> Click - Child</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("TEST - Parent");
  }, []);

  return (
    <>
      <h2>Parent - {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
};

export default Parent;
