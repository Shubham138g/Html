import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';



function App() {
  const [addItem, setAddItem] = useState([]);

  const addEvent = (note) => {
    setAddItem((preData) => {
      return [...preData, note];
    });
    console.log(note);

  };
  return (
    <>
      <Header />
      <CreateNote passNote={addEvent} />


      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
          />
        );
      })}
      
      <Footer />

    </>
  );
}

export default App;
