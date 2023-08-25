import React from 'react';
import { useParams ,useLocation,useNavigate} from 'react-router-dom';



const User = ({}) => {
    const {fname,lname}= useParams();
    const location =useLocation();
    const navigate=useNavigate();
   

  return (
    <>
      <h1>i am  {fname} {lname} user</h1>
      <p>my URL Location is {location.pathname}</p>
      {
        location.pathname ===`/user/shubham/gupta`?(<button onClick={()=>{alert(`you are awesome`)}}>click me</button>):null
      }
      {
        location.pathname ===`/user/shubham/gupta`?(<button onClick={()=>{navigate(-1)}}>go back</button>):null
      }
     
    </>
  );
}

export default User;
