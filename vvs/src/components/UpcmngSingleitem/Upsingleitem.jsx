import React from 'react'
import { useParams } from 'react-router-dom'
import {upMoviesData} from '../HomePage/upcmngmovies'
import './Upsingleitem.css'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const SingleMovie = ({addTicket}) => {

    const navigate=useNavigate();

    const {id}=useParams();

    const data= upMoviesData.filter((item)=>{
        return item.id==id
    })

 


   


  return (
    <div >
        {
            data.map((item)=>{
                return (
                    <div className="main">
                        <div className="left">
                            <img src={item.image}alt="" />
                            
                        </div>
                        <div className="right">
                            <div className=''><p className='p' >Name:<span>{item.name}</span></p></div>
                            <div className=''><p className='p'>DIRECTED BY:<span>{item.director}</span></p></div>
                            <div className=''><p className='p'>Lead Actors:<span>{item.actors}</span></p></div>
                            <div className=''><p className='p'>Movie:<span>{item.description}</span></p></div>
                            
                        </div>
                    </div>
                )
            })
        }
      
    </div>
  )
}



export default SingleMovie
