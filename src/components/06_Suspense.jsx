import React, { Suspense  } from "react";

const SuspenseDemo = () => {

  const SuspenseAsyncCall = React.lazy(() => import("./06_SuspenseExternalComponent"));

  return (
    <>
      <h1>Suspense</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <SuspenseAsyncCall />
      </Suspense>
    </>
  );
};

export default SuspenseDemo;
