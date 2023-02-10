import React from 'react'
import Box from '@mui/material/Box';
import { Stack, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const [name, Setname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function signUp() {
    console.log(name, email)
    var data = {
      "first_name": name,
      "last_name": "",
      "email_id": email,
      "platform_type": "web",
      "redirect_url": "http://localhost:3000/app/home"
    };
    var auth = window.catalyst.auth;
    var signupPromise = auth.signUp(data);
    signupPromise
      .then((response) => {
        console.log('Registered')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function returnLoginrouter(){
    navigate('/app/returnlogin')
  }

  return (
    <Box width={'30%'} sx={{pl:20, pt:20}}>
      <Stack>
        <TextField
        sx={{m:3}}
          id="outlined-controlled"
          label="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }} />

        <TextField
                sx={{m:3}}

          id="outlined-controlled"
          label="name"
          value={name}
          onChange={(e) => { Setname(e.target.value) }}
        />
        <Button onClick={signUp} variant="text">Register</Button>
        <a href="http://localhost:3000/app/"  
        style={{ textDecoration: 'none', fontSize:20, paddingLeft:200 }}>
          Login</a>  



      </Stack>
    </Box>
  )
}
