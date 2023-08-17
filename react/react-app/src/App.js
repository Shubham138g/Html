import './App.css';
// import Greet from './Component/Greet';
// import Props from './Component/Props';
// import CardExample from './Component/CardExample';
// import Sdata from './Sdata';
import Mirzapur from './Component/Mirzapur';
import Cartel from './Component/Cartel';
import { useState } from 'react';



const favseries = "cartel";

// const FavS = () => {
//   if (favseries === "Cartel") {
//     return <Cartel />
//   }
//   else {
//     <Mirzapur />
//   }
// }


function App() {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);

  }

  // let greeting="kaise ho";
  return (
    <>
      {/* <Greet /> */}
      {/* <Props  message={greeting} /> */}

      {/* {Sdata.map((val) => {
        return (
          <CardExample
            key={val.id}
            imgsrc={val.imgsrc}
            Sname={val.Sname}
            title={val.title}
          />
        );
      })} */}

      {/* <FavS /> */}
      {/* {(favseries === "mirzapur")? <Mirzapur />:<Cartel />}    */}
      <div className="state">
        <h1>
          {count}
        </h1>
        <button className='button' onClick={IncNum}>CLICK ME</button>
      </div><br />
      <div className="state">
        <h1>time</h1>
        <button className='button'>GTE TIME</button>
      </div>

    </>
  );
}

export default App;
