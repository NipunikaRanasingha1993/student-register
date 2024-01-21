import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function Login(){
    return(
        <Box>
            <h2>Login</h2>
            <Box sx={{maxWidth:350 , minWidth:275}}>
            <Button variant="contained">Login</Button>

            </Box>
            </Box>
            
        
    )
}