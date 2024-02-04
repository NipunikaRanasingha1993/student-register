import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import instance from '../../service/AxiosOrder';
import {useState,useEffect} from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCard({open,handleClose,data}){

  const [stdName,setStdName] = useState(data?.name);
  const [stdAge,setStdAge] = useState();
  const [stdAddress,setStdAddress] = useState();
  const [stdContact,setStdContact] = useState();

  // const [open, setOpen] = useState(false);
        
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const dataUpdate = () => {
    instance.put('/student/update/'+data?.id,{

        student_name:stdName,
        student_age:stdAge,
        student_address:stdAddress,
        student_contact:stdContact
         
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
      



      <TextField value={data?.name} id="outlined-basic" label="Enetr Your Name" variant="outlined" />
      <TextField id="outlined-basic" label="Enter Your Age" variant="outlined" />
      <TextField id="outlined-basic" label="Enter Your Address" variant="outlined" />
      <TextField id="outlined-basic" label="Enter Your Contact Number" variant="outlined" />
    </Box>
          
       
        <DialogActions>
          <Button onClick={()=>dataUpdate()}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
  
    )
}


// onChange={(val)=>setStdAge(val.target.value)}
// onChange={(val)=>setStdAddress(val.target.value)}
// onChange={(val)=>setStdContact(val.target.value)}

