import { useSyncExternalStore } from "react";

const UseSyncExternalStore = () => {
  // hooks
  const heightFromTop = useSyncExternalStore(
    (listener) => {
      window.addEventListener("scroll", listener);

      return () => {
        window.removeEventListener("scroll", listener);
      };
    },
    () => window.scrollY
  );

  return (
    <>
      <h1>useSyncExternalStore</h1>
      <p>{`heightFromTop: ${heightFromTop.toFixed(2)}`}</p>
      {Array(9000)
        .fill(1)
        .map((_, index) => {
          return <span key={index}>item - </span>;
        })}
    </>
  );
};

export default UseSyncExternalStore;
