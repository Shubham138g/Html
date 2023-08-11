import './App.css';


const name = "Shubham";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
function App() {
  return (
    <>
      <center><h1 className="h1">Hello {name} </h1></center>
      <p className="p">{`Today's Date:${date}`}</p>
      <p className="p">{`Today's Time: ${time}`}</p>
    </>
  );
}

export default App;
