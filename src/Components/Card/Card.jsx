import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
const Card = () => {
    const [event,setEvent]=useState([])
    const [loading,setLoading]=useState(true)
  
    useEffect(()=>{
        axios.get('http://localhost:5000/volunteers')
        .then(data=>{
            console.log(data.data)
            setEvent(data.data)
            setLoading(false)
        })
    },[])
    if (loading) {
      return (
        <Loading></Loading>
      )
  }

    return (
        <div className='py-6'>
           <h2 className='text-3xl font-semibold text-center py-5'>Volunteers</h2>

           <div className='grid lg:grid-cols-3 gap-3'>
            {
             event?.slice(0,6).map(blogs=>(
                <div key={blogs._id} className="card  bg-base-100 shadow-xl">
                <figure><img className='h-[300px]' src={blogs.Thumbnail} alt={blogs.Post_Title}/></figure>
                <div className="card-body">
                  <h2 className="card-title">{blogs.Post_Title}</h2>
                  <p>{blogs.short_description}</p>
                  <p className='font-bold'>Category:{blogs.Category}</p>
                
                  <div className="card-actions justify-end">
             <Link to={`/details/${blogs._id}`}><button className="btn btn-primary">View Deatils</button></Link>
                  </div>
                </div>
              </div>
             ))
            }
           </div>
           <div className='my-5 flex flex-col items-center'>
{
    event.length!==0&&         <Link to='/NeedVolunteerPage'>   <button className='btn btn-success text-white'>Show More</button></Link>
}
           </div>
        </div>
    );
};

export default Card;