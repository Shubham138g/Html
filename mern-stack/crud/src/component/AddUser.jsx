import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import { addUser } from "../serivces/api";
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 30px;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setuser] = useState(defaultValue);
  const navigate=useNavigate();

  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/adduser")
  };
  return (
    <>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input name="name" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input name="username" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="email" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input name="phone" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => addUserDetails()}>
            Add User
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddUser;
