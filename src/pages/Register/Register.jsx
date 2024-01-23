import {Card,Button} from '@mui/material'
import {Link} from 'react-router-dom'


export default function Register(){
    return(
        <Card sx={{width : 400 , padding : 4}}>
            <h1>Register</h1>
            <Button variant="contained">Register</Button>
            <Link to={'/login'}>
            <h5>Login</h5>
            </Link>
        </Card>
    )
}