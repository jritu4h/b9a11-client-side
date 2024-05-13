import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { authContext } from '../Provider/Provider';
import Loading from '../Components/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
  
    if (loading) {
        return(
            <div>
          <Loading></Loading>
            </div>
        )
    }
    if (!user&&!loading) {
        return(
          <Navigate to='/login' replace={true}></Navigate>
        )
    }

    return children

};

export default PrivateRoute;