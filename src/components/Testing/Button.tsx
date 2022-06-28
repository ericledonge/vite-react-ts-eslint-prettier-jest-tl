import './Button.scss';

import React, { FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children }) => {
  const counter = 0;

  return (
    <div className="container">
      <button>{children}</button>

      <p>{counter}</p>
    </div>
  );
};

export default Button;
