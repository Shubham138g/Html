import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import { editUser, getUserr } from "../serivces/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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

const EditUser = () => {
  const [user, setuser] = useState(defaultValue);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUserr(id);
    setuser(response.data[0]);
    console.log(response.data);
  };

  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/alluser");
  };


  return (
    <>
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            name="name"
            onChange={(e) => onValueChange(e)}
            value={user.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
            name="username"
            onChange={(e) => onValueChange(e)}
            value={user.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            name="email"
            onChange={(e) => onValueChange(e)}
            value={user.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            name="phone"
            onChange={(e) => onValueChange(e)}
            value={user.phone}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => editUserDetails()}>
            Edit User
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditUser;
