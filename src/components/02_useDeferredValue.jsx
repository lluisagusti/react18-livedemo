import { useDeferredValue, useState } from "react";

const UseDeferredValue = () => {
  // state
  const [counter, setCounter] = useState(0);

  // hooks
  const deferredCounterValue = useDeferredValue(counter);

  const runProcess = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>useDeferredValue</h1>
      <button onClick={runProcess}>Expensive Process</button> {` - `}
      <button onClick={handleReset}>Reset Values</button>
      <p>{`Clicks: ${counter}`}</p>
      <p>{`Deferred Clicks: ${deferredCounterValue}`}</p>
      <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        {Array(9000)
          .fill(1)
          .map((_, index) => {
            return <span key={index}>{Math.floor(Math.random() * 1000)}</span>;
          })}
      </div>
    </>
  );
};

export default UseDeferredValue;
