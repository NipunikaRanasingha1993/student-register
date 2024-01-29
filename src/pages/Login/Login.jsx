import * as React from 'react';
import { Box, Card,Button } from '@mui/material';
import {Link} from 'react-router-dom'
import instance from '../../service/AxiosOrder.jsx';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

export default function Login(){
  const [emaill,setEmail] = useState('');
  const [passwordd,setPassword] = useState('');

    const loginAction = () =>{
        instance.post('/login', {
            email: emaill,
            password: passwordd,
          })
          .then(function (response) {
            console.log(response.data.token);
            localStorage.setItem('stdToken' , response.data.token)
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return(
        <Card sx={{width : 400 , padding : 4}}>
            <TextField id="filled-basic" label="Enter your email." variant="filled" onChange={(val)=>{setEmail(val.target.value)}}/>
            <br />
            <TextField id="filled-basic" label="Enter your password." variant="filled" onChange={(val)=>{setPassword(val.target.value)}}/>
            <br />
            <Button variant="contained" onClick={() => loginAction()}>Login</Button>
            <Link to={'/register'}>
            <h5>Register</h5>
            </Link>
        </Card>
        
            
        
    )
}