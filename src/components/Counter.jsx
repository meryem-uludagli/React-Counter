import { useState } from "react";
const Counter = () => {
  console.log("Bileşen render oldu");
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center align-items-center gap-5">
      <button
        disabled={count === 0}
        onClick={() => setCount(count - 1)}
        className="btn btn-danger"
      >
        Azalt
      </button>

      <span className="lead fs-1">{count}</span>

      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Arttır
      </button>
    </div>
  );
};

export default Counter;
