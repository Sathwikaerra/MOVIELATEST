import React, { useState } from 'react'
import './payments.css'
import { useParams } from 'react-router-dom'
import { movieData } from '../moviedara'
import { connect} from 'react-redux'
import { addDate } from '../../store/action'


const Payments = ({date,count,list}) => {

    

 

    

    const {user,id}=useParams();

    const data=movieData.filter((item)=>{
        return item.id==id
    })

  return (
    
    <div className="paymentmain">
        <div className="ticket">
       
            <div className='ticketNO'> 

            <div className='logo'>
            
            <img class="main-image" src="data:image/png;base64,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"/>
            <i class="  fa-solid fa-barcode fa-10x my-5"></i>
            </div>
        
           
            </div>
            <div className="details">
            <p>VVS Movies</p>
            <p>Experience the Cinematic World</p>
            <p>Premium Movies & High Quality Sounds</p>
            <p>Branch@Basara</p>
            </div>  
        <div className='ticketNO'> 
            {
                data.map((i)=>
                {
                    return(
                        <div>
                            <img src={i.image} alt="" />
                        </div>
                    )
                })
            }
            </div>

            <div className="paymentdetails">
            <p className=' seatNo'> booked by:&nbsp;&nbsp;<p className='text-white'>{user}</p></p>
                <p className='seatNo'>You Booked a ticket on:&nbsp;&nbsp;<p className='text-white'>{date.date}{' '}{date.day}</p></p>
                <p className=' seatNo'> total tickets:&nbsp;&nbsp;<p className='text-white'>{count}</p></p>
                <p className=' seatNo  d-flex flex-wrap'>seats:&nbsp;&nbsp;{list.map((i)=>{
                    return(
                        <p className=' text-white'>{i}</p>
                    )
                })}</p>
                <p className='seatNo'>total bill:&nbsp;&nbsp;<p className='text-white'> Rs.{count*200}/-</p></p>
            </div>
            
       



       
      
    </div>
    </div>
  )
}


 const mapStateToProps=state=>({
    list: state.Ticketreducer,
    count:state.Ticketreducer.length,
    date:state.DateReducer.date,
})
export default connect(mapStateToProps)(Payments)
