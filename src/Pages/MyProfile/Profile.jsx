import React, { useContext } from 'react';
import { authContext } from '../../Provider/Provider';

const Profile = () => {
    const {user}=useContext(authContext)
    return (
        <div className=' flex flex-col items-center py-10'>
            <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
<h2 className='text-3xl font-semibold'>{user?.displayName}</h2>
        </div>
    );
};

export default Profile;