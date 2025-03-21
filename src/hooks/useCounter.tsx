import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [count, setCount] = useState(initialValue);

  const incrementent = (): void => {
    setCount(count + 1);
  };

  const decrement = (): void => {
    setCount(count - 1);
  };

  const reset = (): void => {
    setCount(initialValue);
  };

  return { count, incrementent, decrement, reset };
};
