import { useInsertionEffect, useLayoutEffect, useEffect } from "react";

const UseInsertionEffect = () => {
  useInsertionEffect(() => {
    console.log("useInsertionEffect");
  });

  useEffect(() => {
    console.log("useEffect");
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });

  return (
    <>
      <h1>useInsertionEffect</h1>
      <p>check logs...</p>
    </>
  );
};

export default UseInsertionEffect;
