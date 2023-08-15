import './App.css';
import Heading from './Component/Heading';
import Greet from './Component/Greet';


const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();



function App() {
  return (
    <>
      <p className="p">{`Today's Date:${date}`}</p>
      <p className="p">{`Today's Time: ${time}`}</p>
      <p className="p">{`Today's Time: ${time}`}</p>
      <Greet />
      <Heading />

      
      {/* <h1 className="h1"> Hello sir,<span style={cssStyle}>{greet}</span></h1> */}
    </>
  );
}

export default App;
