import { useState } from "react";

const useCounter = ({initialValue = 0, maxValue = 20, minValue = 0}) => {
  const [count, setCount] = useState(initialValue);

  const handleInc = () => {
    if(count < maxValue){
      setCount(count + 1);
    }
  };
  const handleDec = () => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };

  return {
    count,
    handleInc,
    handleDec,
  };
};

export default useCounter;
