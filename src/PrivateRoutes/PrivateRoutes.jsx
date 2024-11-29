import React, { useContext } from 'react';
import { AuthContext } from '../ContextProviders/ContextProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <div className='text-center mt-2'>
            <span className="loading loading-spinner text-secondary"></span>
        </div>;
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;