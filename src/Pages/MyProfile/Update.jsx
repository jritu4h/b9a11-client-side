import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form'
import axios from 'axios';

import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Provider/Provider';
const Update = () => {
    const { user } = useContext(authContext)
    const datas=useLoaderData()
    console.log(datas)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const { name, photo, location, Category,  date, description,need } = data;
        const newData = {
            Thumbnail: photo,
            Post_Title: name,
            Location: location,
            Category: Category,
            Description: description,
            Need: parseFloat(need),
            UpcomingTime: new Date(date),
            email: user?.email,
            name: user?.displayName
        }
        axios.patch(`http://localhost:5000/volunteers/${datas._id}`, newData)
        .then(response => {
        
         if (response.data.modifiedCount === 1) {
             toast.success('Product updated successfully!');
         } else {
             toast.warning('No changes made to the product.');
         }
     
          
     
        })
        .catch(error => {
          console.error('Error:', error);
        });
        console.log(newData)
    };
    console.log(errors);
    return (
        <div className='flex flex-col items-center'>
            <div className="flex items-center justify-center p-12">

                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                            Post Title
                            </label>
                            <input defaultValue={datas.Post_Title}   {...register("name", { required: true })} type="text" name="name" placeholder='Post Title'
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                               Location
                            </label>
                            <input defaultValue={datas.Location} type="text" name="location"  {...register("location", { required: true })} placeholder="Enter Location"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                            No. of volunteers needed
                            </label>
                            <input defaultValue={datas.Need} type="number" name="location"  {...register("need", { required: true })} placeholder=" No. of volunteers needed"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label  className="mb-3 block text-base font-medium text-[#07074D]">
                                Photo Url
                            </label>
                            <input defaultValue={datas.Thumbnail}   {...register("photo", { required: true })} type="url" name="photo" id="photo" placeholder="Enter Photo Url"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                     Upcoming Date
                                    </label>
                                    <input   {...register("date", { required: true })} type="date" name="date" id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Category
                                    </label>
                                    <select   {...register("Category", { required: true })} className="select select-bordered w-full max-w-xs">
                                        <option value={datas.Category}>{datas.Category}</option>
                                        <option value='Embroidery'>Embroidery</option>
                                        <option value='Knitting & Crocheting'>Knitting & Crocheting</option>
                                        <option value='healthcare'>Healthcare</option>
                                        <option value='Education'>Education</option>
                                        <option value='Social service'>Social service</option>
                                        <option value='animal welfare'>animal welfare</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                        <div className="mb-5 pt-3">
                           
                            <div className="mb-4">
                                <label  className="block text-gray-700 font-medium mb-2">Short Description</label>
                                <textarea defaultValue={datas.Description}   {...register("description", {required: true})}  
                                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" rows="5"></textarea>
                            </div>
                        </div>

                        <div>
                            <button type='submit'
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Update Data
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;