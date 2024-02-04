import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useState,useEffect} from 'react';
import instance from '../../service/AxiosOrder.jsx';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import DialogCard from '../DialogCard/DialogCard.jsx';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function View(){

  const [data,setData] = useState([]);

  const [open,setOpen] = useState(false);
  const [selectData,setSelectData] = useState();

  // const [open, setOpen] = useState(false);
  // const [selectValue, setSelectValue] = useState();

  // const handleClickOpen = (val) => {
  //   console.log(val);
  //   setSelectValue(val);
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const updateData = (val)=>{
    console.log(val.row);
    setOpen(true);
    setSelectData(val.row);
  }

  const close = (val) =>{
    setOpen(false);
  }

  // const close = () =>{
  //   setOpen(false);
  // }

  // const closePopop = () =>{
  //   setPopop(false);
  // }


  const deleteAction = (id) =>{
    instance.delete('/student/delete/'+id)
  .then(function (response) {
    alert('delete Successful.....')
    // handle success
    getData(setData);
  })
  
  .catch(function (error) {
    // handle error
    alert('please try again later.....')
  })

  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Student Name', width: 150 },
        { field: 'age', headerName: 'Student Age', width: 150 },
        { field: 'address', headerName: 'Student Address', width: 150 },
        { field: 'contact', headerName: 'Student Contact', width: 150 },
        { field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (act) =>(
          <Box sx={{ '& button': { m: 1 } }}>
            
          <Button onClick={()=>updateData(act)} variant="contained" size="small">
          Update
        </Button>

    
        
        <Button onClick={()=>deleteAction(act.row.id)} variant="contained" size="small" color='error'>
          Delete
        </Button>
        
            
          </Box>
        )

        },
      
      ];
    
      const getData = () =>{
          instance({
              method: 'get',
              url: '/student/getAll',
            })
              .then(function (response) {
                  const array = [];
                response.data.forEach(val => {
                  array.push({
                      id:val.id,
                      name:val.student_name,
                      age:val.student_age,
                      address:val.student_address,
                      contact:val.student_contact,


                      


                     });
                  setData(array);

                  

});
                   console.log(response.data)
                
              });
              
              
      }
      


      useEffect(()=>{
          getData(setData)
      },[]);



    return(
      <Box>

        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        
        
      />
      

    </div>
    <DialogCard data={selectData} open={open} handleClose={close}/>
    
  
   </Box>

   
    

    
    
)
}