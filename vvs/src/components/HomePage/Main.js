import React, {  useState } from 'react'
import './Main.css'

import {upMoviesData} from './upcmngmovies'
import Upitem from '../upcmngitem/Upitem'



const Main = () => {

  const [data,setData]=useState(upMoviesData)

  console.log(data)


  

  return (
    <div className='popular'>
    <h1>UpComming Movies</h1>
    <hr />
    <div className="popular-item">
        {
            data.map((item,i)=>{ 
                return <Upitem  id={item.id}  name={item.name} image={item.image} year={item.year} actors={item.actors} director={item.director}/>
            })
        }
 </div>

</div>


  )
}

export default Main