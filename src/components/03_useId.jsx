import { useId } from "react";

const UseId = () => {
  // hooks
  const id = useId();

  return (
    <>
     <label htmlFor={id + 'firstName'}>First Name</label>
     <div>
        <input type="text" id={id + 'firstName'}></input>
     </div>
     <label htmlFor={id + 'lastName'}>Last Name</label>
     <div>
        <input type="text" id={id + 'lastName'}></input>
     </div>
    </>
  );
};

export default UseId;
