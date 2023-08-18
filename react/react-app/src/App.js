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
  const bgBack = () => {
    bgcolor = 'red';
    setbg(bgcolor);
    setname('back ho gya 😁');
  }

  const [fullName, setfullName] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
  });
  // const [myName, setmyName] = useState();

  //  const [lastName, setlastName] = useState("");
  //   const [lName, setlName] = useState();

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;
    const { value, name } = event.target;

    setfullName((preValue) => {
      console.log(preValue);
      if (name === 'fName') {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email,
          phone: preValue.phone
        }
      }
      else if (name === 'lName') {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email,
          phone: preValue.phone,
        }
      }
      else if (name === 'email') {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value,
          phone: preValue.phone,
        }
      }
      else if (name === 'phone') {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: preValue.email,
          phone: value,
        }
      }
    })
  }

  const onsubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
    // setmyName(formName)
    // setlName(lastName)
  }


  // const inputEventTwo = (event) => {
  //   setlastName(event.target.value);
  // }

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
      <form onSubmit={onsubmits}>

        <div className='state'>
          <h1>Hello {fullName.fName} {fullName.lName}</h1>
          <h4>{fullName.email} {fullName.phone}</h4>
          <input type="text"
            placeholder='Enter your name'
            onChange={inputEvent}
            name='fName'
            value={fullName.fName}
          /><br />

          <input type="text"
            placeholder='Enter your lName'
            onChange={inputEvent}
            name='lName'
            value={fullName.lName} /><br />
          <input type="email"
            placeholder='Enter your email'
            onChange={inputEvent}
            name='email'
            value={fullName.email} /><br />
          <input type="text"
            placeholder='Enter your phone no.'
            onChange={inputEvent}
            name='phone'
            value={fullName.phone} /><br />
          <button type='submit' className='button'>Submit</button>
        </div>
      </form>
    </>
  );
}
export default App;
