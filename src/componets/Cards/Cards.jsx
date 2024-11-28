import React from 'react';
import { FaChartArea } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { PiWallFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Cards = ({card}) => {
    const { image, title, price, status, area, floor, garage, location, property_id } = card;
    return (
        <div className='hover:-translate-y-3 hover:scale-105 duration-1000 border-2 border-[#A5D7E8] p-5 bg-[#19376D] rounded-xl text-white flex flex-col justify-between'>
            <img className='rounded-xl' src={image} alt="" />
            <h1 className='text-lg font-medium mt-2'>{title}</h1>
            <div className='flex justify-between items-center mt-1 font-extralight'>
                <p className='flex items-center gap-2'><FaChartArea></FaChartArea>{area}</p>
                <p className='flex items-center gap-2'><PiWallFill></PiWallFill>{floor}</p>
                <p className='flex items-center gap-2'><BiSolidCarGarage></BiSolidCarGarage>{garage}</p>
            </div>
            <div className='flex justify-around items-center mt-2 font-extralight'>
                <p>Location : {location}</p>
                <p>Status : {status}</p>
            </div>
            <p className='text-center font-bold mt-2'>Price : {price}</p>
            <div>
                <Link to={`/details/${property_id}`}><button className='font-medium w-full bg-[#576CBC] mt-2 py-2 rounded-xl hover:text-black hover:bg-[#236CBC]'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Cards;