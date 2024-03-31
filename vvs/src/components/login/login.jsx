import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const navigate=useNavigate();
    const[email,setEmail]=useState();

    const[password,setPassword]=useState();

    const Handle=(e)=>{
        e.preventDefault();
         axios.post('https://movielatest-6.onrender.com/login',{email,password}).then(res=>{
          if(res.data=='success')
          {
       
            navigate(`/home/${email}`)
          }
          else{
          
            document.querySelectorAll('output').innerHtml='waste'

          }
     
         }).catch(err=>{
          console.log(err)
        
         })
        


    }
        
          
        
       
    




  return (
    <div className="loginpage">
  
         <form className='form d-flex  ' onSubmit={Handle}>
      

        <div>
            <label htmlFor="">UserName:</label>
        <input type="email"  name="" onChange={(e)=>setEmail(e.target.value)} id="" />

        </div>

        <div>
            <label htmlFor="">Password:</label>
        <input type="password" name="" onChange={(e)=>setPassword(e.target.value)} id="" />

        </div>
        
        <div><button type='submit' className='btn btn-success '>Login</button></div>

        <div className='output text-primary'>
          wasted....

        </div>

        <div className='btm'> 
            <p className='lll text-black'>Already  have an acccount ?</p>
            <a className='link' href="/signup"><span className='lll'>Signup here</span></a>
        </div>
        




       </form>
       
    </div>
  )
}

export default Login
