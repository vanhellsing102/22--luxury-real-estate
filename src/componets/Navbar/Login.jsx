import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProviders/ContextProviders';
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {

    const {loginUser, loginWithGoogle, loginWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(true);

    const handleGoogleLogin = () =>{
        loginWithGoogle()
            .then(result =>{
                console.log(result.user);
                navigate('/')  
            })
            .catch(error =>{
                console.log(error); 
            })
    }
    const handleGithubLogin = () =>{
        loginWithGithub()
            .then(result =>{
                console.log(result.user);
                navigate('/');
            })
            .catch(error =>{
                console.error(error);
            })
    }
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        
        loginUser(email, password)
            .then(result =>{
                const loggedUser = result.user;
                toast.success('Login Successfully !');
                navigate('/');
            })
            .catch(error =>{
                const errorMessage = error.message;
                toast.error(errorMessage);
            })
        
    }
    
    return (
        <div className='mt-7 px-7'>
            <h1 className='text-4xl font-bold text-center text-white'>Login Now !!!</h1>
            <div className="md:w-1/2 lg:w-2/4 w-full mx-auto mb-16 bg-[#19376D] p-10 rounded-2xl mt-5">
                <form onSubmit={handleLogin} className='text-black font-normal'>
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
                            <input type={ showPassword ? "text" : "password"} name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                            {
                                showPassword ? 
                                <FiEye onClick={ () => setShowPassword(!showPassword)} className='absolute right-2 top-4'></FiEye>
                                :
                                <FiEyeOff onClick={ () => setShowPassword(!showPassword)} className='absolute right-2 top-4'></FiEyeOff>
                            }
                        </div>
                    <label className="label">
                        <a className="link text-white">Forget password</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-secondary">Login</button>
                </div>
                </form>
                <div className='mt-4'>
                    <p>Don't have an account ? <Link to={'/register'}><button className='text-secondary font-semibold'>Register Now</button></Link></p>
                </div>
                <div className='flex justify-center items-center gap-10 mt-7 text-3xl border py-2'>
                    <button onClick={handleGoogleLogin}><FaGoogle className='text-yellow-400'></FaGoogle></button>
                    <button onClick={handleGithubLogin}><FaGithub className='text-green-600'></FaGithub></button>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;