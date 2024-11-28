import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../../Cards/Cards';

const Resorts = () => {
    const cards = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center text-white mt-10'>Resorts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 px-7 mt-12'>
                {
                    cards.map(card => <Cards key={card.property_id} card={card}></Cards>)
                }
        </div>
        </div>
    );
};

export default Resorts;