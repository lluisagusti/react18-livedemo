import { useState } from "react";

const AutomaticBatching = () => {
  // state
  const [counter, setCounter] = useState(0);
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState(1);

  const runProcess = () => {
    setCounter(counter + 1);
    setTextValue(textValue + '*')
    setNumberValue(numberValue * 2)
  };

  const handleReset = () => {
    setCounter(0);
    setTextValue('');
    setNumberValue(1);
  };

  return (
    <>
      <h1>AutomaticBatching</h1>
      <button onClick={runProcess}>Update States</button> {` - `}
      <button onClick={handleReset}>Reset Values</button>
       <p>{`counter: ${counter}`}</p>
       <p>{`textValue: ${textValue}`}</p>
       <p>{`numberValue: ${numberValue}`}</p>
       <br />
       {/* <p>check profiler...</p> */}
    </>
  );
};

export default AutomaticBatching;
