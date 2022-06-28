import './Counter.scss';

import React, { FC, ReactNode, useEffect, useState } from 'react';

type ButtonProps = {
  children: ReactNode;
  onCounterEquals3: () => void;
};

const Counter: FC<ButtonProps> = ({ children, onCounterEquals3 }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 3) {
      onCounterEquals3();
    }
  }, [counter]);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <button onClick={handleClick}>{children}</button>

      <p>{counter}</p>
    </div>
  );
};

export default Counter;
