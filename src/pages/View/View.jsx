import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useState,useEffect} from 'react';
import instance from '../../service/AxiosOrder.jsx';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';





export default function View(){

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
            <div>
            <Button variant="contained" size="small">
          Update
        </Button>
            <Button onClick={()=>deleteAction(act.row.id)} variant="contained" size="small" color='error'>
          Delete
        </Button>
            </div>
          </Box>
        )

        },
      //   {
      //     field: 'age',
      //     headerName: 'Age',
      //     type: 'number',
      //     width: 90,
      //   },
      //   {
      //     field: 'fullName',
      //     headerName: 'Full name',
      //     description: 'This column has a value getter and is not sortable.',
      //     sortable: false,
      //     width: 160,
      //     valueGetter: (params) =>
      //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      //   },
      ];
      
      const [data,setData] = useState([]);
      
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
      
      // const rows = [
      //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      // ];
    return(

        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        // pageSizeOptions={[5, 10]}
      />
    </div>
    
)
}