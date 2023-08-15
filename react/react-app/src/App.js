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
    <CardExample title={"shubham gupta"} text={"This is a sample card with some example content."} />
    <CardExample title={"Card"} text={"This is a sample card with some example content."} />
    <CardExample title={"Card Text"} text={"This is a sample card with some example content."} />
    <CardExample />

    </>
  );
}

export default App;
