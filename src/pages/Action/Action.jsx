import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import instance from '../../service/AxiosOrder.jsx';
import Alert from '@mui/material/Alert';


export default function Action(){
    const [yourName,setYourName] = useState('');
    const [yourAge,setYourAge] = useState('');
    const [yourAddress,setYourAddress] = useState('');
    const [yourContact,setYourContact] = useState('');

    const saveAction = () =>{
        instance.post('/student/save', {
            student_name: yourName,
            student_age: yourAge,
            student_address: yourAddress,
            student_contact: yourContact
          })
          .then(function (response) {
            console.log(response);
            alert('Student Save Successful....')
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });

    }



    return(
        <Card sx={{ maxWidth: 500 }}>
            <CardHeader title="Student Save"/>

            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Enter your Name" variant="standard" onChange={(val)=>setYourName(val.target.value)}/>
      <TextField id="standard-basic" label="Enter your Age" variant="standard" onChange={(val)=>setYourAge(val.target.value)}/>
      <TextField id="standard-basic" label="Enter Your Address" variant="standard" onChange={(val)=>setYourAddress(val.target.value)}/>
      <TextField id="standard-basic" label="Enter Your Contact Number" variant="standard" onChange={(val)=>setYourContact(val.target.value)}/>
    </Box>
    <Box sx={{margin:2}}>
    
    <Button onClick={()=>saveAction()} variant="contained">Save</Button>
    </Box>
    

        </Card>
    )
}