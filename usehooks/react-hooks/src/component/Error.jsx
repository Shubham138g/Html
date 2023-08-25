import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate= useNavigate();
  return (
    <>
    <div className="f_button">

      <h1>opps! Page Not Found</h1>
      <button onClick={()=>{navigate("/search")}}>Go Back</button>
    </div>
    </>
  );
}

export default Error;
