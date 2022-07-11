import { useState, useEffect } from "react";

const SuspenseAsyncCall = () => {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error @ SuspenseAsyncCall >> ", error);
      }
    };

    fetchData();
  });

  return <div>{advice}</div>;
};

export default SuspenseAsyncCall;
