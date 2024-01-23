import './App.css'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import {Routes,Route,Link, Navigate} from 'react-router-dom'
import Main from '../component/Main/Main.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [login,setLogin] = useState(true);

  useEffect(() =>{
    const key =localStorage.getItem('stdToken')
    console.log(key)
    
    if(key!==null){
    }else{
      setLogin(false);
    }

  }, []);

  
  
  return (
    <div>
      {
        login ?
        <Main/>
        :
        <div>
          <Routes>
        <Route path={'*'} element={<Navigate to={'/login'}/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
      </Routes>

        </div>
      }
      
      </div>
    
   
    )
}

export default App
