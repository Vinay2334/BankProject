import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import Signup from './Signup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginScreen() {
  const [credentials, setcredentials] = useState({accNo:"",password:""})
  const [SignIn, setSignIn] = useState(false)
  const onChange=(e)=>{
    setcredentials({...credentials,[e.target.name]: e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
      const response=await fetch(`http://localhost:3000/api/auth/login`,{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({accountNo:credentials.accNo,password:credentials.password})
          });
          const json=await response.json()
          console.log(json)
          if(json.success){
            localStorage.setItem('token',json.authtoken)
            console.log("setted")
            window.location.assign('/')
          }
          else{
            toast.error("Invalid Credentials Try Again", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            }
        }

  return (
    <>
    {SignIn ? <Signup/>: 
    <div className='loginScreen'>
      <ToastContainer/>
      <div className="login_title">
      <h1>Login</h1>
      </div>
        <form className='Login_form' action="" onSubmit={handleSubmit}>
          <div className="login_acc">
            <label htmlFor="accountNo">Account Number :</label>
            <input type="number" name='accNo' id='accNo' onChange={onChange} required />
            </div>
            <div className="login_pass">
            <label htmlFor="password">Password :</label>
            <input type="password" name="password" id="password" onChange={onChange} required />
            </div>
            <div className="login_footer">
            <button id='loginBtn' >login</button>
        </div>
        <span className='SignUp_message'>Dont have an account?</span>
        <span className= 'login_signup' to='/signup' onClick={()=>setSignIn(true)} >Sign Up</span>
        </form>
    </div>
  }
  </>
  )
}

export default LoginScreen
