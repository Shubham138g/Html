import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';

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
            <Button variant="outlined" className="inc_dec_btn inc_btn" onClick={incNum}>
              <AddIcon />
            </Button>
           
            <Button variant="outlined" className="inc_dec_btn dec_btn" onClick={decNum}>
              <RemoveIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
