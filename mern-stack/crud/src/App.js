import './App.css';

//components
import NavBar from './component/NavBar';
import AddUser from './component/AddUser';
import AllUser from './component/AllUser';
import MStack from './component/MStack';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter >
        <Routes>
          < Route path='/' Component={MStack} />
          < Route path='alluser' Component={AllUser} />
          < Route path='adduser' Component={ AddUser } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
