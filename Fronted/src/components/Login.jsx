import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import { useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../login.css"
import axios from 'axios';
function Login() {

    let nameRef=useRef()
    let passwordRef=useRef()

    async function handlelogin(){
        let userbody={
            loginusername:nameRef.current.value,
            loginpassword: passwordRef.current.value
        }
        console.log("loginuser",userbody);
        let res=await axios.post("http://localhost:5000/userlogin",userbody)
        console.log(res);
        if(res.data.success==true){
            alert(res.data.message)
        }else{
            alert(res.data.message)

        }
    }




    return (
    <div className="Loginflexcontent">
        <img className='loginimg' src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
        
        <Box className="login">
            <h1 className='h1'>Login</h1>
            <h2 className="h2">Username</h2>
            <OutlinedInput placeholder='enter username' className='loginuser logi' inputRef={nameRef} />
        
            <h2 className=" h2" >Password</h2>
            <OutlinedInput placeholder='enter password' className='loginpass logi' inputRef={passwordRef}/>
            <div className="buttons">
                <Button variant="contained" color="primary" onClick={handlelogin}>Submit</Button>
                <Button  variant="contained" color="primary"> <Link to="Signup" className='Linktaglogin'>Signup?</Link></Button>
            </div>
        </Box>
        </div>
    )
}

export default Login