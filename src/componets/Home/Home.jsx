import React from 'react';
import Slider from '../Slider/Slider';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import ApartmentTypes from '../ApartmentTypes/ApartmentTypes';
import Partners from '../Partners/Partners';
import Services from '../Services/Services';
import Video from '../Video/Video';

const Home = () => {
    
    const cards = useLoaderData();
    
    return (
        <div className=''>
            <Slider></Slider>
            <div className='text-center mb-16'>
                <h1 className='text-4xl font-semibold mt-32'>Explore your dream home today</h1>
                <h1 className='text-2xl font-semibold m-3'>Step into luxury living</h1>
                <p className=''>To identify and prioritize the most important aspects of luxury real estate properties as perceived by clients, agents, or stakeholders.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 px-7'>
                {
                    cards.map(card => <Cards key={card.property_id} card={card}></Cards>)
                }
            </div>
            <ApartmentTypes></ApartmentTypes>
            <Services></Services>
            <Video></Video>
            <Partners></Partners>
        </div>
    );
};

export default Home;