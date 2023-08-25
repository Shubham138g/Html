import React from 'react';
import { useParams } from 'react-router-dom';

const User = ({match}) => {
    const {fname,lname}= useParams();

  return (
    <>
      <h1>i am  {fname} {lname} user</h1>
    </>
  );
}

export default User;
