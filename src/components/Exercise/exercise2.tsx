import './exercise2.scss';

import React, { FC } from 'react';

type Exercise2Props = {
  title?: string;
};

const Exercise2: FC<Exercise2Props> = ({ title = 'Hello!' }) => {
  return (
    <div className="my-box">
      <p className="my-box__title">{title}</p>

      <button className="my-box__button">Button 1</button>
      <button className="my-box__button--secondary">Button 2</button>
    </div>
  );
};

export default Exercise2;
