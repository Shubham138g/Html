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

  let newTime = new Date().toLocaleTimeString();
  const [time, settime] = useState(newTime);
  const GetTime = () => {
    let newTime = new Date().toLocaleTimeString();
    settime(newTime);
  }

  let dClock = new Date().toLocaleTimeString();
  const [digitalC, setdigitalC] = useState(dClock);

  const DigitalClock = () => {
    dClock = new Date().toLocaleTimeString();
    setdigitalC(dClock);
  }
  setInterval(DigitalClock, 1000);

  let bgcolor = "red";
  const [bg, setbg] = useState(bgcolor);
   const [name, setname] = useState('click me');

  const bgChange = () => {
    let updatebg = "yellow";
    setbg(updatebg)
    setname('how are you! 😘')
  }
  const bgBack=()=>{
    bgcolor='red';
    setbg(bgcolor);
    setname('back ho gya 😁');
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
        <h1>
          {time}
        </h1>
        <button className='button' onClick={GetTime}>GET TIME </button>
      </div><br />
      <div className="state">
        <h1>
          {digitalC}
        </h1>
      </div>
      <div style={{ backgroundColor: bg }}>
        <h1>CHANING BGCOLOR</h1>
        <button className='button' onClick={bgChange} onDoubleClick={bgBack}>{name}</button>

      </div>

    </>
  );
}
export default App;
