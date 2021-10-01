import { useEffect, useRef } from "react";

//preserves value
//DOES NOT trigger re-render
//target Dom node/elements

const UserefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    //since useRef doesn't re-render thus
    //we use useEffect hook without second parameter
    //and add focus to current when rendered
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UserefBasics;
