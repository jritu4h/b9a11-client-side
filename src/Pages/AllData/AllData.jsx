import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // assuming you're using React Router
import Loading from '../../Components/Loading/Loading';

const AllData = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    axios.get('https://b9a11-server-side-swart.vercel.app/volunteers')
      .then(data => {
        setEvents(data.data)
        setLoading(false)
      })
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Fetch data again and filter by search term
    axios.get('https://b9a11-server-side-swart.vercel.app/volunteers')
      .then(data => {
        const filteredEvents = data.data.filter(event => event.Post_Title.toLowerCase().includes(searchTerm.toLowerCase()));
        setEvents(filteredEvents);
        setLoading(false)
      })
      .catch(error => console.log(error));
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  if (loading) {
    return<Loading></Loading>
  }
  return (
    <div>
      <div className="max-w-lg mx-auto">
        <form className="flex items-center justify-center gap-2" onSubmit={handleSearch}>
          <div>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search for volunteers"
              name="search"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="block bg-blue-500 hover:bg-blue-700 text-white font-semibold p-2 rounded"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className=' grid lg:grid-cols-3 gap-4 grid-cols-1 mt-7'>
        {events.map((volunteer) => (
          <div key={volunteer._id} className="card bg-base-100 shadow-xl">
            <figure><img className='h-[300px]' src={volunteer.Thumbnail} alt={volunteer.Post_Title} /></figure>
            <div className="card-body">
              <h2 className="card-title">{volunteer.Post_Title}</h2>
              <p>{volunteer.short_description}</p>
              <p className='font-bold'>Category: {volunteer.Category}</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${volunteer._id}`}><button className="btn btn-primary">View Details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllData;
