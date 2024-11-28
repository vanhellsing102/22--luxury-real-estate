import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextProviders/ContextProviders';

const Login = () => {
    const authInfo = useContext(AuthContext);
    return (
        <div className='mt-7 px-7'>
            <h1 className='text-4xl font-bold text-center text-white'>Login Now !!!</h1>
            <div className="md:w-1/2 lg:w-2/4 w-full mx-auto mb-16 bg-[#19376D] p-10 rounded-2xl mt-5">
                <form className='text-white'>
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
                    <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
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
            </div>
        </div>
    );
};

export default Login;