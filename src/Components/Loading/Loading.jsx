import React, { useContext } from 'react';
import { authContext } from '../../Provider/Provider';

const Loading = () => {
    const {user}=useContext(authContext)
    return (
        <div className='py-20'>
            <div className="relative flex justify-center items-center">
    <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
    <img src={user?.photoURL}className="rounded-full h-28 w-28"/>
</div>
        </div>
    );
};

export default Loading;