import React from 'react'
import './Upitem.css'
import {Link} from 'react-router-dom'



const Item = (props) => {
 


  

  return (
    <div className='item'  >
      <Link to={`/Upcomming/${props.id}`}>
      <div><img src={props.image} alt="" /></div>
      </Link>   
      
      <div className="title">{props.name}</div>
      <div className='text-danger'>{props.director}</div>
       
        


         
      
    </div>
  )
}

export default Item
