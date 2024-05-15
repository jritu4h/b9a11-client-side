import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Provider/Provider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Loading from '../../Components/Loading/Loading';

const MyPost = () => {
    const {user}=useContext(authContext)
    const [datas,setDatas]=useState([])
    const token = localStorage.getItem('web-token');
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        if (user?.email) {
            axios.get(`https://b9a11-server-side-swart.vercel.app/volunteer?email=${user?.email}`,{
              headers: {
                authorize: `Bearer ${token}`
              }
          })
                .then(data => {
                    console.log(data.data)
                    setDatas(data.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }
    }, [user?.email]);
    
    
    if (loading) {
      return (
        <Loading></Loading>
      )
  }

  const handeldelete = (id,setBlogs) => {
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`https://b9a11-server-side-swart.vercel.app/volunteers/${id}`)
                .then(response => {
                    console.log('Response:', response.data);
                    if (response.data.acknowledged && response.data.deletedCount === 1) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Product has been deleted.",
                            icon: "success"
                            
                        });
                        setDatas(prevDatas => prevDatas.filter(item => item._id !== id));
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the file.",
                            icon: "error"
                        });
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    Swal.fire({
                        title: "Error!",
                        text: "An error occurred while deleting the file.",
                        icon: "error"
                    });
                });
        }
    });
};

    return (
        <div className='flex flex-col items-center'>
            
            <h2 className='py-5 text-3xl text-center'>My Volunteer List</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>category</th>
        <th>Location</th>
        <th>Coustomize</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        datas.map(product=>(
            <tr>
          
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={product.Thumbnail}alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{product.Post_Title}</div>
                </div>
              </div>
            </td>
            <td>
             {product.Category}
              <br/>
            </td>
            <td>{product.Location}</td>
            <th>
<Link to={`/my-profile/update/${product._id}`}>              <button className="btn btn-ghost btn-xs">Update</button></Link>
            </th>
            <th>
              <button onClick={() => handeldelete( product._id,setDatas)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
          </tr>
        ))
      }
    
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyPost;