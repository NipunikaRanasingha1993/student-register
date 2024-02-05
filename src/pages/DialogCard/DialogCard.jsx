import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import instance from '../../service/AxiosOrder';
import {useState,useEffect} from 'react';
import { List } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCard({open,handleClose,data}){


  const [stdName,setStdName] = useState(data?.name)
  const [stdAge,setStdAge] = useState(data?.age)
  const [stdAddress,setStdAddress] = useState(data?.address)
  const [stdContact,setStdContact] = useState(data?.contact)


  const dataUpdate = () => {
    instance.put(`/student/update/${data.id}`,{

        student_name:stdName,
        student_age:stdAge,
        student_address:stdAddress,
        student_contact:stdContact
         
      })
      .then(function (response) {
        handleClose();
      
      })
      .catch(function (error) {
        console.log(error);
      });
    }

 

  return (
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={stdName} id="outlined-basic" 
      label="Enetr Your Name" variant="outlined" onChange={(val)=>setStdName(val.target.value)}/>
      <TextField value={stdAge} id="outlined-basic" 
      label="Enter Your Age" variant="outlined" onChange={(val)=>setStdAge(val.target.value)}/>
      <TextField value={stdAddress} id="outlined-basic"
       label="Enter Your Address" variant="outlined" onChange={(val)=>setStdAddress(val.target.value)}/>
      <TextField value={stdContact} id="outlined-basic" 
      label="Enter Your Contact Number" variant="outlined" onChange={(val)=>setStdContact(val.target.value)}/>
    </Box>

    <DialogActions>
          <Button onClick={()=>dataUpdate()}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
  
    )
}



