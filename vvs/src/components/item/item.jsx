import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'



const Item = (props) => {
 


  

  return (
    <div className='item'  >
      <div><Link to={`/home/${props.user}/${props.id}`}>
      <img src={props.image} alt="" />
      </Link>   </div>
      
      <div className="title">{props.name}</div>
       
        


         
      
    </div>
  )
}

export default Item
