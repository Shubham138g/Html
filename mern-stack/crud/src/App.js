import './App.css';

//components
import NavBar from './component/NavBar';
import AddUser from './component/AddUser';
import AllUser from './component/AllUser';
import MStack from './component/MStack';
import EditUser from './component/EditUser';
import Footer from './component/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <div className="wrapper">
      <BrowserRouter >
        <NavBar />
        <Routes>
          < Route path='/' Component={MStack} />
          < Route path='/alluser' Component={AllUser} />
          < Route path='/adduser' Component={AddUser} />
          < Route path='/edit/:id' Component={EditUser} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
