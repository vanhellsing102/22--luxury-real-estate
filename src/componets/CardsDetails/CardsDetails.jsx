import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaChartArea } from "react-icons/fa";
import { LuBedSingle } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";
import { GiBrickWall } from "react-icons/gi";
import { BiSolidCarGarage } from "react-icons/bi";

const CardsDetails = () => {
    const { id } = useParams();
    const cards = useLoaderData();
    const exitCard = cards.find(card => card.property_id === id);
    console.log(typeof(id), cards, exitCard);
    
    const { image, title, area, beds, baths, floor, garage, added_date, location, segment_name, description, price, status, facilities} = exitCard;
    
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 px-6 gap-7 my-12 items-center'>
            <div>
                <h1 className='text-3xl font-bold text-white mb-3'>{title}</h1>
                <img className='rounded-lg' src={image} alt="" />
            </div>
            <div className='bg-slate-400 p-7 rounded-lg text-black'>
                <h1 className='font-semibold text-2xl border-b pb-3'>Property Details</h1>
                <p className='mt-3 border-b pb-3'>{description}</p>
                <div className='mt-3 flex items-center justify-around border-b pb-3'>
                    <p className='flex gap-2 items-center'><FaChartArea></FaChartArea>{area}</p>
                    <p className='flex gap-2 items-center'><LuBedSingle></LuBedSingle>{beds}</p>
                    <p className='flex gap-2 items-center'><LiaBathSolid></LiaBathSolid>{baths}</p>
                    <p className='flex gap-2 items-center'><GiBrickWall></GiBrickWall>{floor}</p>
                    <p className='flex gap-2 items-center'><BiSolidCarGarage></BiSolidCarGarage>{garage}</p>
                </div>
                <div className='border-b pb-3 mt-3'>
                    <h3 className='font-semibold text-xl'>Facilities : </h3>
                    {
                        facilities.map(item => <li>{item}</li>)
                    }
                </div>
                <div className='mt-3 border-b pb-3 flex items-center  gap-7'>
                    <p><span className='font-bold'>Location :</span> {location}</p>
                    <p><span className='font-bold'>Added date :</span> {added_date}</p>
                </div>
                <div className='mt-3 border-b pb-3 flex items-center  gap-7'>
                    <p className='font-extrabold'><span className='font-bold'>Price : </span>{price}</p>
                    <p><span className='font-bold'>Sagement : </span>{segment_name}</p>
                    <p><span className='font-bold'>Status : </span>{status}</p>
                </div>
                <div className='mt-3 '>
                    <Link className=''><button className='w-full bg-[#19376D] py-3 text-white font-bold rounded-lg'>Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CardsDetails;