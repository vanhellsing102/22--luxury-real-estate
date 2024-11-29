import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
    
    return (
        <div className='h-svh flex flex-col items-center justify-center text-white'>
            <h1 className='text-5xl'>Opps !!!</h1>
            <p className='text-xl'>{error.status}!</p>
            <p className='text-xl'>{error.statusText}!</p>
        </div>
    );
};

export default ErrorPage;