import './App.css';
// import ComA from './ComA';
import { Route, Routes} from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import NavBar from './component/NavBar';
import User from './component/User';
function App() {

  return (
    <>
        {/* <ComA /> */}
        <NavBar />
      <Routes>
        <Route exact path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/user/:name' Component={User} />
        <Route path='*' Component={Error} />
      </Routes>
    </>
  );
}

export default App;
