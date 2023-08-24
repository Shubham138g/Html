import React,{useEffect, useState} from 'react';

const ComA = () => {
    const [num, setNum] = useState(0);
    useEffect(()=>{
        alert('i am clicked')
        // document.title=`i am click ${num} times`;
    },[])
    const incNum=()=>{
        setNum(num+1);
    }
  return (
    <>
      <button onClick={incNum}>click me {num}</button>
    </>
  );
}

export default ComA;
