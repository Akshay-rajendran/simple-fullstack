import React, { useRef } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import "../signup.css"
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';

function Signup() {

    let usernameref=useRef()
    let useremailref=useRef()
    let userpasswordref=useRef()
    let userpasswordconfirmref=useRef()
    const navigate=useNavigate()


async function signup(){
    if(userpasswordref.current.value==userpasswordconfirmref.current.value){

       let user={
            username:usernameref.current.value,
            email:useremailref.current.value,
            password:userpasswordref.current.value
        }
        console.log("user",user);
        let res=await axios.post("http://localhost:5000/adduser",user)
        console.log(res);
        if(res.data.sucees==true){
                  navigate("/")
                  console.log("login success");
        }else{
            alert(res.data.message)
        }


    }else{
        alert("please confirm your password again")
    }

}

    return (
        <div className="Signupbody">
            <Box className="signup">
                <h1 className='signh1'>Signup</h1>
                <h2 className="Signuphead h">Username</h2>
                <OutlinedInput placeholder='enter username'className='signi' inputRef={ usernameref}/>
                <h2 className="Signupgmail h">Gmail</h2>
                <OutlinedInput placeholder='enter gmail' className='signi' inputRef={useremailref}/>
                <h2 className="Signuppass h" >Password</h2>
                <OutlinedInput placeholder='enter password' className='signi' inputRef={ userpasswordref} />
                <h2 className="conformpass h">Confirm </h2>
                <OutlinedInput placeholder='confirm password' className='signi' inputRef={userpasswordconfirmref}/><br />
                <Button variant="contained" color="primary" className='btn' onClick={signup}>
                    Submit
                </Button>
              </Box>
        </div>
    )
}

export default Signup