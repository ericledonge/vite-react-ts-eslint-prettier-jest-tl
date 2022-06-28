import React, { useRef } from 'react';

// Focus a button

const RefsExercise1 = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

export default RefsExercise1;
