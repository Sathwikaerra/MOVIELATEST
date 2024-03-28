import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='Home '>

<div className="right">
            <div className="right-dec">
            <div class="containerw">
            <div class="info d-flex  ">
              <h1 className='text-center'>Looking For Awesome Movies</h1>
              <p className='text-white text-center'>CLick here for registration and Enjoy the Services</p>
              <Link to='/signup'><button className='bg-primary'>Register</button></Link>
            </div>
            
          </div>
        



            </div>
          
       
        </div>

      


        <div className="left">
            <div className='left-img'>
            <img class="main-image" src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp"/>

            </div>
           
            
        </div>
        
      
    </div>
  )
}

export default Homepage
