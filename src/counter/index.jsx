import React, { useState } from "react";
import Count from "./component/count";
import useCounter from "./hooks/counter";

function Counter() {
  // custom hooks
  const {
    count: count1,
    handleInc: handleInc1,
    handleDec: handleDec1,
  } = useCounter({ initialValue: 5, maxValue: 15, minValue: 2 });

  const {
    count: count2,
    handleInc: handleInc2,
    handleDec: handleDec2,
  } = useCounter({ initialValue: 8, maxValue: 17, minValue: 5 });
  
  const counter = useCounter({ initialValue: 10, maxValue: 20, minValue: 7 });

  return (
    <section className="w-1/3 h-[50vh] mx-auto">
      <Count count={count1} handleInc={handleInc1} handleDec={handleDec1} />
      <Count count={count2} handleInc={handleInc2} handleDec={handleDec2} />
      <Count
        count={counter.count}
        handleInc={counter.handleInc}
        handleDec={counter.handleDec}
      />
    </section>
  );
}

export default Counter;
