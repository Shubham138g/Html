import React from 'react';
import {Button,styled} from '@mui/material';
import { useNavigate} from 'react-router-dom';

const Button1=styled(Button)`
width: 200px;
height: 70px;
letter-spacing:3px;
border-radius:50px;
background-color: black;
color: auqa;

&:hover{
  background-color: yellow;
  color: black;
  letter-spacing:3px;
  
}
`

const MStack = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/adduser'); 
  };

  return (
   <>
   <div className="container">
    <div className="box up-and-down-animation">
      <p>CRUD APPLICATION</p>
    </div><br/><br/>
    <Button1 variant='contained' className='btn_get_started' onClick={handleGetStarted} >GET STARTED</Button1>
   </div>
   </>
  );
}

export default MStack;
