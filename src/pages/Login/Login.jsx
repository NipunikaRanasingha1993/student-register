import * as React from 'react';
import { Box, Card,Button } from '@mui/material';
import {Link} from 'react-router-dom'
import instance from '../../service/AxiosOrder.jsx';

export default function Login(){

    const loginAction = () =>{
        instance.post('/login', {
            email: 'nipunika12345@gmail.com',
            password: '12345'
          })
          .then(function (response) {
            console.log(response.data.token);
            localStorage.setItem('stdToken' , response.data.token)
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return(
        <Card sx={{width : 400 , padding : 4}}>
            <h1>Login</h1>
            <Button variant="contained" onClick={() => loginAction()}>Login</Button>
            <Link to={'/register'}>
            <h5>Register</h5>
            </Link>
        </Card>
        
            
        
    )
}