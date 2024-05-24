import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decNumber,incNumber } from './actions';

function App() {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <>
      <h1>Incremet and Decrement</h1>
      <a title='decrement' onClick={()=>dispatch(decNumber(10))} ><span>-</span></a>
      <input type="text" value={myState} readOnly />
      <a title='increment' onClick={()=>dispatch(incNumber(10))}><span>+</span></a>
    </>
  );
}

export default App;
