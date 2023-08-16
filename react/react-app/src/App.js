import './App.css';
// import Greet from './Component/Greet';
// import Props from './Component/Props';
import CardExample from './Component/CardExample';
import Sdata from './Sdata';




function App() {
  // let greeting="kaise ho";
  return (
    <>
      {/* <Greet /> */}
      {/* <Props  message={greeting} /> */}

      {Sdata.map((val) => {
        return (
          <CardExample
          key={val.id}
            imgsrc={val.imgsrc}
            Sname={val.Sname}
            title={val.title}
          />
        );
      })}

    </>
  );
}

export default App;
