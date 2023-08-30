import React from 'react';
import { useEffect } from 'react';
import {Table,TableCell,TableHead,TableRow} from '@mui/material';
import { getUser } from '../serivces/api';

const AllUsers=()=>{
   useEffect(()=>{
    getAllUsers();
   },[])
}

const getAllUsers= async()=>{
  let response=  await getUser();
  console.log(response);
}

const AllUser = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </>
  );
}

export default AllUser;
