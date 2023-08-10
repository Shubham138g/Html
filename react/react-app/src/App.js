import './App.css';


const name = "Shubham";
const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const time = new Date().toTimeString();
function App() {
  return (
    <>
      <center><h1 className="h1">Hello {name} </h1></center>
      <p className="p">{`Today's Date:${date}/${month}/${year}`}</p>
      <p className="p">{`Today's Time: ${time}`}</p>
    </>
  );
}

export default App;
