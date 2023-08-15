import './App.css';
// import Heading from './Component/Heading';
import Greet from './Component/Greet';
import Props from './Component/Props';
// import Date from './Component/Date';





function App() {
  let greeting="kaise ho";
  return (
    <>
      <Greet />
    <Props  message={greeting} />
    </>
  );
}

export default App;
