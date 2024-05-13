import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FullDetils = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div>
            <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row">
 <img src={data.Thumbnail}className="w-[300px] rounded-lg shadow-2xl" />
 <div id="my-anchor-element">
   <h1 className="text-5xl font-bold">{data.Post_Title}</h1>
   <p className="py-2 text-xl">Category: {data.Category}</p>
   <p className="py-2 text-xl">Description: {data.Description}</p>
  
   <p className="py-2 text-xl">Location: {data.Location}</p>
   <p className="py-2 text-xl">Need Volanter: {data.Need}</p>
   <p className="py-2 text-xl">Organizer Name: {data.name}</p>

   <p className="py-2 text-xl text-red-500 font-bold flex items-center gap-1">Upcomming Date: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
{data.UpcomingTime} 
</p>
 </div>
</div>
</div> 
     </div>
        </div>
    );
};

export default FullDetils;