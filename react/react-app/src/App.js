import './App.css';


const name = "Shubham";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();


let currentDate = new Date();
currentDate = currentDate.getHours();
let greet = '';


if (currentDate > 1 && currentDate < 12) {
  greet = 'GOod Morning';
}
else if (currentDate > 12 && currentDate < 19) {
  greet = 'Good Afternoon';
}
else if (currentDate > 19 && currentDate < 24) {
  greet = 'Good night';
}


function App() {
  return (
    <>
      <center><h1 className="h1">Hello {name} </h1></center>
      <p className="p">{`Today's Date:${date}`}</p>
      <p className="p">{`Today's Time: ${time}`}</p>
      <h1> Hello sir,{greet}</h1>
    </>
  );
}

export default App;
