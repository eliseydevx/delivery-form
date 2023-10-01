import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button className="counter__btn" onClick={handleDecrement}>
        -
      </button>
      <p className="counter__sum">{count}</p>
      <button className="counter__btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;
