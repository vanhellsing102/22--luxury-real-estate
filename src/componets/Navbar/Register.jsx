import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextProviders/ContextProviders';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    // const [errorMessage, setErrorMessage] = useState('');
    
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)){
            return console.log('sto');
        }
        createUser(email, password)
                .then(result =>{
                    const registerUser = result.user;
                    console.log(registerUser);
                })
                .catch(error =>{
                    const errorMessage = error.message;
                    console.log(errorMessage);
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
                        <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
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
        </div>
    );
};

export default Register;