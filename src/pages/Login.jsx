import React, { useState } from 'react'
import {Container, Form, Button, FormGroup} from 'react-bootstrap'
import '../styles/Login.css'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import axios from "axios";
import API_URL from "../../config/global";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const handleChange = (e) =>{
      const{name, value} = e.target
      setFormData({...formData, [name]:value
      });
  };
  const handleSubmit = async (e) =>{
      e.preventDefault();
      const response = await axios.post(
        `${API_URL}/login`, formData
      );
      console.log(response);
      if(response.data === 'Invalid Username or Password'){
        alert("Invalid Username or Password");
      }else if(response.data === "Server busy"){
        alert("verify your email id")
      }else if(response?.status){
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        navigate("/home");
      }
  }

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
    <h1>Login Form</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
             type='email'
             name='email'
             value={formData.email}
             onChange={handleChange}
             required />
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
             type='password'
             name='password'
             value={formData.password}
             onChange={handleChange}
             required />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={handleOpen}>Login</Button>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Form>
</Container>
  )
}
export default Login