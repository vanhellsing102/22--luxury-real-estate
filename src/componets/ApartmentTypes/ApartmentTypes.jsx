import React from 'react';
import './ApartmentTypes.css'
import apmt1 from '../../assets/Apartment/pexels-photo-1436190.jpeg'
import apmt2 from '../../assets/Apartment/pexels-photo-1717272.jpeg'
import apmt3 from '../../assets/Apartment/pexels-photo-2077937.jpeg'
import apmt4 from '../../assets/Apartment/pexels-photo-430216.jpeg'

const ApartmentTypes = () => {
    return (
        <div className='apartment my-20 px-7'>
            <h1 className='text-4xl font-bold text-center'>Explore Apartment Types</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12'>
                <img className='hover:-scale-105 hover:duration-1000 border-4' src={apmt1} alt="" />
                <img className='lg:mt-16 md:mt-16 mt-0 hover:-scale-105 hover:duration-1000 border-4' src={apmt2} alt="" />
                <img className='hover:-scale-105 hover:duration-1000 border-4' src={apmt3} alt="" />
                <img className='lg:mt-16 md:mt-16 mt-0 hover:-scale-105 hover:duration-1000 border-4' src={apmt4} alt="" />
            </div>
        </div>
    );
};

export default ApartmentTypes;