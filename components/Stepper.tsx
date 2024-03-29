import React, { useState } from 'react';

function Stepper({ initial = 0, onChange = () => {} }: Props) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div>
      <button data-cy="decrement" onClick={handleDecrement}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button data-cy="increment" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Stepper;

interface Props {
  initial?: number;
  onChange?: (count: number) => void;
}
