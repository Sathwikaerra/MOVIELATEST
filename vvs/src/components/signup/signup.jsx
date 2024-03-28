import React, { useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {

    const navigate=useNavigate();
    const[email,setEmail]=useState();

    const[password,setPassword]=useState();

    const Handle=(e)=>{
        e.preventDefault();
        axios.post('https://movielatest-6.onrender.com/signup',{email,password}).then((res)=>{
            console.log(res)
        navigate('/login')
    
    
    }).catch(err=>console.log(err))
    }



  return (
    <div className=' loginpage'>
         <form className='form d-flex  ' onSubmit={Handle}>
      

        <div>
            <label htmlFor="">UserName:</label>
        <input type="email"  name="" onChange={(e)=>setEmail(e.target.value)} id="" />

        </div>

        <div>
            <label htmlFor="">Password:</label>
        <input type="password" name="" onChange={(e)=>setPassword(e.target.value)} id="" />

        </div>
        
        <div><button type='submit' className='btn btn-warning'>Sign Up</button></div>

        <div>
            <p>Already  have an acccount ?<a className='link' href="/login"><span className='text-black'>Login here</span></a></p>
        </div>
        




       </form>
      
    </div>
  )
}

export default Signup
