import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Alert from "@material-ui/core/Alert";
// import Stack from "@material-ui/core/Stack";


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
      // <Stack sx={{ width: '100%' }} spacing={2}>
      // <Alert variant="filled" severity="error">
      //   This is an error alert — check it out!
      // </Alert>;
      // </Stack>
      setNum(0);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="inc_dec_div">
          <h1>{num}</h1>
          <div className="btn">
            <Tooltip title="Increment">
              <Button
                variant="outlined"
                className="inc_dec_btn inc_btn"
                onClick={incNum}
              >
                <AddIcon />
              </Button>
            
            </Tooltip>
            <Tooltip title="Decrement">
              <Button
                variant="outlined"
                className="inc_dec_btn dec_btn"
                onClick={decNum}
              >
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
       
      </div>
    </>
  );
}
