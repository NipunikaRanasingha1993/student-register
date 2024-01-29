import {Card,Button, Box} from '@mui/material'
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import instance from '../../service/AxiosOrder';
import { useState } from 'react';



export default function Register(){

    const [yourName , setYourName] = useState('');
    const [yourEmail , setYourEmail] = useState('');
    const [yourPassword , setYourPassword] = useState('');

    const registerAction = () =>{
        instance.post('/register', {
            name: yourName,
            email: yourEmail,
            password: yourPassword,
    
          })
          .then(function (response) {
            console.log('Register Successful...');
          })
          .catch(function (error) {
            console.log('Please Try Again.....');
          });
    }


    return(
        <Card sx={{width : 400 , padding : 4}}>
            <h1>Registation</h1>
            <Box sx={{padding:2}}>
            <TextField id="filled-basic" label="Name" variant="filled" onChange={(val)=>{setYourName(val.target.value)}}/>
            <br />
            <TextField id="filled-basic" label="Email" variant="filled" onChange={(val)=>{setYourEmail(val.target.value)}}/>
            <br />
            <TextField id="filled-basic" label="Password" variant="filled" onChange={(val)=>{setYourPassword(val.target.value)}}/>


            </Box>
            <Button variant="contained" onClick={()=>registerAction()}>Register</Button>
            <Link to={'/login'}>
            <h5>Login</h5>
            </Link>
        </Card>
    )
}