import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div>
          <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
<Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-[250px] min-h-full bg-blue-500 text-white text-content">
      {/* Sidebar content here */}
      <li><Link to='/my-profile/profile'>Profile</Link></li>
      <li><Link to='/my-profile/addvolunteer'>Add Volunteer Data</Link></li>
      <li><Link to='/my-profile/mylist'>My Volunteer List</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default MyProfile;