import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProviders/ContextProviders';
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { FiEye, FiEyeOff } from "react-icons/fi";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(true);
    
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)){
            return toast.error('Enter minimum 8 character 1 uppercase 1 lowercase and 1 special character');
        }

        createUser(email, password)
                .then(result =>{
                    const registerUser = result.user;
                    console.log(result);
                    toast.success('Registered Successfully !');
                    navigate('/');
                    updateProfile(registerUser, {
                        displayName: name,
                        photoURL: photo
                    })
                    .then( () =>{
                        console.log("update successfully");
                    })
                    .catch(error =>{
                        console.error(error);
                    })
                })
                .catch(error =>{
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    toast.error('This email already use');
                }) 
    }

    return (
        <div className='mt-7 px-7'>
            <h1 className='text-4xl font-bold text-center text-white'>Register Now !!!</h1>
            <div className="md:w-1/2 lg:w-2/4 w-full mx-auto mb-16 bg-[#779ce0] p-10 rounded-2xl mt-5">
                <form onSubmit={handleRegister} className='text-black font-normal'>
                    <div className="form-control">
                        <label className="label">
                            <span>Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span>Photo URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="Photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span>Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter Your Email Address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span>Password</span>
                        </label>
                        <div className='relative form-control'>
                            <input type={showPassword ? "text" : "password"} name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                            {
                                showPassword ? 
                                <FiEye onClick={ () => setShowPassword(!showPassword)} className='absolute right-2 top-4'></FiEye>
                                :
                                <FiEyeOff onClick={ () => setShowPassword(!showPassword)} className='absolute right-2 top-4'></FiEyeOff>
                            }
                        </div>
                        <label className='flex mt-2 gap-2 items-center'>
                            <input type="checkbox" defaultChecked className="checkbox checkbox-accent checkbox-sm" />
                            <p>Accept Temrs & Conditons</p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Register</button>
                    </div>
                </form>
                <div className='mt-4'>
                    <p>Already have an account ? <Link to={'/login'}><button className='text-white font-semibold'>Login</button></Link></p>
                </div>
            </div>
            <Toaster />
        </div>
        
    );
};

export default Register;