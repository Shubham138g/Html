import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import NavBar from './NavBar';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavBar />
   <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/service' Component={Service} />
        <Route exact path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </>
  );
}

export default App;
