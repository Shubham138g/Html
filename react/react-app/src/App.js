import './App.css';
import Heading from './Component/Heading';

const name = "Shubham";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();


let currentDate = new Date(2023,8,11,11);
currentDate = currentDate.getHours();
let greet = '';

const cssStyle={};

if (currentDate > 1 && currentDate < 12) {
  greet = 'Good Morning';
  cssStyle.color='yellow';
}
else if (currentDate > 12 && currentDate < 19) {
  greet = 'Good Afternoon';
  cssStyle.color='orange';
}
else if (currentDate > 19 && currentDate < 24) {
  greet = 'Good night';
  cssStyle.color='red';
}


function App() {
  return (
    <>
      <center><h1 className="h1">Hello {name} </h1></center>
      <p className="p">{`Today's Date:${date}`}</p>
      <p className="p">{`Today's Time: ${time}`}</p>
      <p className="p">{`Today's Time: ${time}`}</p>
      <Heading />

      
      <h1 className="h1"> Hello sir,<span style={cssStyle}>{greet}</span></h1>
    </>
  );
}

export default App;
