import React from 'react';
import './Categories.css';
import { FaArrowRight } from "react-icons/fa";
import penthouse from '../../assets/category logo/5188384.svg'
import beachfront from '../../assets/category logo/3202021.svg'
import mansions from '../../assets/category logo/5434407.svg'
import privateislands from '../../assets/category logo/3983653.svg'
import resorts from '../../assets/category logo/2769244.svg'
import villas from '../../assets/category logo/6280292.svg'
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Categories = () => {
    return (
        <div className='categories px-7'>
            <h1 className='text-4xl text-center font-bold text-white my-10'>Discover Popular Properties</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12'>
                <div className='border-2 border-black text-center bg-[#19376D] h-64 flex flex-col justify-center items-center' data-aos="fade-down-right" data-aos-duration="1000">
                    <Link to={'/beachfront'}>
                        <img className='mx-auto' src={beachfront} alt="" />
                        <h2 className='text-2xl font-semibold text-white mt-2'>Beachfron Properties</h2>
                        <p className='mt-3'><FaArrowRight className='w-full text-4xl '></FaArrowRight></p>
                    </Link>
                </div>
                <div className='border-2 border-black text-center bg-[#19376D] h-64 flex flex-col justify-center items-center' data-aos="zoom-in-down" data-aos-duration="1000">
                    <Link to={'/mansions'}>
                        <img className='mx-auto' src={mansions} alt="" />
                        <h2 className='text-2xl font-semibold text-white mt-2'>Mansions</h2>
                        <p className='mt-3'><FaArrowRight className='w-full text-4xl '></FaArrowRight></p>
                    </Link>
                </div>
                <div className='border-2 border-black text-center bg-[#19376D] h-64 flex flex-col justify-center items-center' data-aos="fade-down-left" data-aos-duration="1000">
                    <Link to={'/penthouse'}>
                        <img className='mx-auto' src={penthouse} alt="" />
                        <h2 className='text-2xl font-semibold text-white mt-2'>Pent House</h2>
                        <p className='mt-3'><FaArrowRight className='w-full text-4xl '></FaArrowRight></p>
                    </Link>
                </div>
                <div className='border-2 border-black text-center bg-[#19376D] h-64 flex flex-col justify-center items-center' data-aos="fade-up-right" data-aos-duration="1000">
                    <Link to={'/private-islands'}>
                        <img className='mx-auto' src={privateislands} alt="" />
                        <h2 className='text-2xl font-semibold text-white mt-2'>Private Islands</h2>
                        <p className='mt-3'><FaArrowRight className='w-full text-4xl '></FaArrowRight></p>
                    </Link>
                </div>
                <div className='border-2 border-black text-center bg-[#19376D] h-64 flex flex-col justify-center items-center' data-aos="zoom-in-down" data-aos-duration="1000">
                    <Link to={'/resorts'}>
                        <img className='mx-auto' src={resorts} alt="" />
                        <h2 className='text-2xl font-semibold text-white mt-2'>Resorts</h2>
                        <p className='mt-3'><FaArrowRight className='w-full text-4xl '></FaArrowRight></p>
                    </Link>
                </div>
                <div className='border-2 border-black text-center bg-[#19376D] h-64 flex flex-col justify-center items-center' data-aos="fade-up-left" data-aos-duration="1000">
                    <Link to={'/villas'}>
                        <img className='mx-auto' src={villas} alt="" />
                        <h2 className='text-2xl font-semibold text-white mt-2'>Villas</h2>
                        <p className='mt-3'><FaArrowRight className='w-full text-4xl '></FaArrowRight></p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;