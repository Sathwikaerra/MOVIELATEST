import React from 'react'
import './navbar.css'
import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg   ">
  <div className="container-fluid">
    <div className="img">
    <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/btacqd3bue5mveaihloe" alt="" />
    </div>
 
    <a className="navbar-brand  text-white" href="#">VVS Films</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item ">
          <Link className="nav-link active   border border-danger text-warning   px-3 rounded-pill  px-3 mx-3 my-1" aria-current="page" to="/login">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active text-warning  border border-danger px-3 rounded-pill mx-3 my-1" aria-current="page"to="/upcommingmovies">Upcomming  Movies</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-warning  border border-danger px-3 rounded-pill  px-3  mx-3 my-1 " aria-current="page" to="/signup">Signup</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-warning  border border-danger px-3 rounded-pill  mx-3 my-1  " aria-current="page" to="/">Logout</Link>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
