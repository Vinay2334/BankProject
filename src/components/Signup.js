import React, {useState} from 'react'
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup(props) {
    const [credentials, setcredentials] = useState({accNo:"",password:"",name:""})
    const host=process.env.PORT || "http://localhost:3000"
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        const response=await fetch(`${host}/api/auth/createuser`,{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({accountNo:credentials.accNo,password:credentials.password,name:credentials.name})
          });
          const json=await response.json()
          console.log(json)
          if(json.success){
            localStorage.setItem('token',json.authtoken)
            window.location.assign('/')
          }
          else{
            toast.error("Invalid Credentials", {
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
    <div className='SignUp'>
      <ToastContainer/>
    <form className='signUp_form' action="" style={{"border": "1px solid #ccc"}} onSubmit={handleSubmit}>
  <div className="SignUp_container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label className='signUp_name' htmlFor="name"><b>Name</b></label>
    <input className='signUp_ntext' type="text" placeholder="Enter Name" name="name" onChange={onChange} required minLength={3}/>

    
    <label className='signUp_accno' htmlFor="accountNo"><b>Account No:</b></label>
    <input className='signUp_atext' type="number" placeholder="Enter Account Number" name="accNo" onChange={onChange} required minLength={5}/>

    <label className='signUp_password' htmlFor="password"><b>Password</b></label>
    <input className='signUp_ptext' type="password" placeholder="Enter Password" name="password" onChange={onChange} required minLength={6}/>

    <div className="clearfix">
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
    </div>
  )
}

export default Signup
