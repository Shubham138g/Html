import React from 'react';
import { useParams ,useLocation} from 'react-router-dom';



const User = ({}) => {
    const {fname,lname}= useParams();
    const location =useLocation();
    
   

  return (
    <>
      <h1>i am  {fname} {lname} user</h1>
      <p>my URL Location is {location.pathname}</p>
      {
        location.pathname ===`/user/shubham/gupta`?(<button onClick={()=>{alert(`you are awesome`)}}>click me</button>):null
      }
     
    </>
  );
}

export default User;
