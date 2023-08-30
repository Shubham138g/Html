import React from 'react';
import { useEffect,useState } from 'react';
import {Button, Table,TableBody,TableCell,TableHead,TableRow,styled} from '@mui/material';
import { getUser } from '../serivces/api';




const StyledTable=styled(Table)`
width:90%;
margin: 50px auto 0 auto;
`;

const THead=styled(TableRow)`
background:#000000;
& > th{
  color:white;
  font-size:22px
}
`;

const TBody=styled(TableRow)`
& > td{
  font-size:20px
}
 `



const AllUser = () => {

   const [users, setusers] = useState([]);

  useEffect(()=>{
    getAllUsers();
   },[])

   const getAllUsers= async()=>{
    let response=  await getUser();
    setusers(response.data)
  }
  
  return (
    <>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>

        <TableBody>
          {
            users.map(user =>(
              <TBody>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant='contained' color='secondary' style={{marginRight:10}}>Edit</Button>
                  <Button variant='contained'>Delete</Button>
                </TableCell>
              </TBody>
            ))
          }
        </TableBody>
      </StyledTable>
    </>
  );
}

export default AllUser;
