import React from 'react'
import { useParams } from 'react-router-dom'
import { movieData } from '../moviedara'
import './singlemoovie.css'
import star from './star.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const SingleMovie = ({addTicket}) => {

    const navigate=useNavigate();

    const {user,id}=useParams();

    const data= movieData.filter((item)=>{
        return item.id==id
    })

    const bookticket=(id)=>{
        
        navigate(`/book/${user}/${id}`)
    }



   


  return (
    <div className='singlepage'>
        {
            data.map((item)=>{
                return (
                    <div className="main">
                        <div className="left">
                            <img className='prabhasimg' src={item.image}alt="" />
                            
                        </div>
                        <div className="right">
                        <p className='white'><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" />(122)</p>
                            <div className=''><p className='black' >Name:<span className='white'>{item.name}</span></p></div>
                            <div className=''><p className='black'>DIRECTED BY:<span className='white'>{item.director}</span></p></div>
                            <div className=''><p className='black'>Lead Actors:<span className='white'>{item.actors}</span></p></div>
                            <div className=''><p className='black'>Movie:<span className='white'>{item.description}</span></p></div>
                            <button  className='btn bg-primary' onClick={()=>bookticket(item.id)}>Book your ticket</button>
                        </div>
                    </div>
                )
            })
        }
      
    </div>
  )
}



export default SingleMovie
