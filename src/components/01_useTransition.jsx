import { useState, useTransition } from "react";

const initialValue = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 10000)
);

const UseTransition = () => {
  // state
  const [counter, setCounter] = useState(0);
  const [listSize, setListSize] = useState(initialValue);

  // hooks
  const [isPending, startTransition] = useTransition();

  const runProcess = () => {
    setCounter(counter + 1);
    // setListSize([...listSize, ...listSize]);

    startTransition(() => {
    setListSize([...listSize, ...listSize]);
})
  };

  const handleReset = () => {
    setCounter(0);
    setListSize(initialValue);
  };

  return (
    <>
      <h1>useTransition</h1>
      <button onClick={runProcess}>Expensive Process</button> {` - `}
      <button onClick={handleReset}>Reset Values</button>
      <p>{`Clicks: ${counter}`}</p>
      {isPending ? <p>Loading...</p> : null}
      <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        {listSize &&
          listSize.map((item, index) => {
            return <span key={index}>{`${item}-`} </span>;
          })}
      </div>
    </>
  );
};

export default UseTransition;





// import { useTransition, useState } from "react";

// hooks
// const [isPending, startTransition] = useTransition();

// startTransition(() => {
//   setListSize([...listSize, ...listSize]);
// })

// {isPending ? <p>Loading...</p> : null}
