import React, { FC, forwardRef, ReactNode, useRef } from 'react';

// Focus an external button with forwardRef

const RefsExercise2 = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Input ref={inputRef} />

      <Button onClick={handleClick}>Focus the input</Button>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-types
type InputProps = {};

type Ref = HTMLInputElement;

// eslint-disable-next-line react/display-name
const Input: FC<InputProps> = forwardRef<InputProps, Ref>((props, ref) => {
  return <input ref={ref} />;
});

// const Input = forwardRef((props, ref) => {
//   return <input {...props} ref={ref} />;
// });

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default RefsExercise2;
