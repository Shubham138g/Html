import './App.css';
// import ComA from './ComA';
import { Route, Routes,Redirect} from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import NavBar from './component/NavBar';
import User from './component/User';
import Search from './component/Search';

function App() {

  return (
    <>
        {/* <ComA /> */}
        <NavBar />
      <Routes>
        <Route exact path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/search' Component={Search} />
        <Route path='/user/:fname/:lname' Component={User} />
        <Route path='*' Component={Error} />
        {/* <Redirect to="/user" /> */}
      </Routes>
    </>
  );
}

export default App;
