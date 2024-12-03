import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProviders/ContextProviders';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;
    
    return (
        <div className='text-center'>
            <h2 className='text-4xl'>Name : {displayName}</h2>
            <p>Email : {email}</p>
            <p>PhotoURL : {photoURL}</p>
        </div>
    );
};

export default Profile;