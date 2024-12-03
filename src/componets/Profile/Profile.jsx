import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProviders/ContextProviders';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    let { displayName, email, photoURL } = user;

    const handleSavedChanges = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        let displayName = "";
        let photoURL = "";

        updateProfile(auth.currentUser, {
            displayName : displayName + name,
            photoURL : photo + photoURL,
        })
            .then( () =>{
                console.log("updated profile");
                navigate('/');
            })
            .catch( () =>{
                console.log("not updated")
            });      
    }
    
    return (
        <div className='text-center text-black md:w-1/2 lg:w-2/4 w-full mx-auto mb-16 bg-[#19376D] p-10 rounded-2xl mt-16'>
            <form onSubmit={handleSavedChanges}>
                <div className="form-control">
                    <label className="label">
                        <span>Name</span>
                    </label>
                    <input type="text" name='name' className="input input-bordered" required defaultValue={displayName} />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span>Email</span>
                    </label>
                    <input type="email" name='email' className='font-bold input input-bordered' placeholder='this item can"t be changes' value={email} disabled/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span>PhotoURL</span>
                    </label>
                    <input type="url" name='photo' className="input input-bordered" required defaultValue={photoURL} />
                </div>
                <div className='mt-5'>
                    <button className='btn btn-secondary text-black font-bold'>Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default Profile;