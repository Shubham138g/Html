import './App.css';


const name = "shubham";
const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const time = new Date().getHours();
function App() {
  return (
    <>
      <h1>hello {name} </h1>
      <p>{`Today's Date:${date}/${month}/${year}`}</p>
      <p>{`Today's Time:${time}`}</p>
    </>
  );
}

export default App;
