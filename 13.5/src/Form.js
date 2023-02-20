import { useEffect, useRef } from "react";
import React from "react";

const Form = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form>
      <label htmlFor="input-field">Enter your name:</label>
      <input id="input-field" type="text" ref={inputRef} />
    </form>
  );
};
export default Form;
