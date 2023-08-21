import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ToDoList from './component/ToDoList';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const itemOfList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }
  const deleteItem = (id) => {
    console.log("clicked");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Item" onChange={itemEvent} value={inputList} />
          <button onClick={itemOfList}>+</button>

          <ol>
            {/* <li>{inputList} </li> */}
            {items.map((itemValue, index) => {
              return <ToDoList
                key={index}
                id={index}
                text={itemValue}
                onSelect={deleteItem}
              />
            }
            )}

          </ol>
        </div>

      </div>
    </>
  );
}

export default App;
