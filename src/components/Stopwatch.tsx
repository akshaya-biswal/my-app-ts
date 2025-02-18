import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <h2>Stopwatch - {time}</h2>
      <button onClick={() => setIsRunning(true)}> Start</button>
      <button onClick={() => setIsRunning(false)}> Stop</button>
      <button
        onClick={() => {
          setTime(0);
          setIsRunning(false);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Stopwatch;
