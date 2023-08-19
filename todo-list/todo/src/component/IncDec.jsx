import React, { useState } from "react";

export default function IncDec() {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("sorry bro zero limit reached");
      setNum(0);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="inc_dec_div">
          <h1>{num}</h1>
          <div className="btn">
            <button className="inc_dec_btn" onClick={incNum}>
              Increment
            </button>
            <button className="inc_dec_btn" onClick={decNum}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
