import React from 'react';

const User = ({match}) => {
  return (
    <>
      <h1>i am user {match.params.name} </h1>
    </>
  );
}

export default User;
