import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decNumber,incNumber } from './actions';

function App() {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <>
      <h1>Incremet and Decrement</h1>
      <a title='decrement' onClick={()=>dispatch(decNumber())} ><span>-</span></a>
      <input type="text" value={myState} />
      <a title='increment' onClick={()=>dispatch(incNumber())}><span>+</span></a>
    </>
  );
}

export default App;
