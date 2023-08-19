import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    console.log(event.target.value);
    setInputList(event.target.value);
  }
  const itemOfList = () => {

  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Item" onChange={itemEvent} />
          <button onClick={itemOfList}>+</button>

          <ol>
            {/* <li>{inputList} </li> */}
            {items.map((itemValue) => {
              return <li>{itemValue} </li>;
            }
            )}

          </ol>
        </div>

      </div>
    </>
  );
}

export default App;
