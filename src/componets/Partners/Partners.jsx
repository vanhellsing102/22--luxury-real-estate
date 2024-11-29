import React from 'react';
import Marquee from "react-fast-marquee";
import './Partners.css';
import logo1 from '../../assets/company logo/70s-mustang-garage-rainbow-logo.webp'
import logo2 from '../../assets/company logo//Brain-Science-2-1.webp'
import logo3 from '../../assets/company logo/Hipster-Design-Studio-Logo-2.webp'
import logo4 from '../../assets/company logo/Hot-idea-1.png'
import logo5 from '../../assets/company logo/Logomakr-templates-boutique-logo.jpg'
import logo6 from '../../assets/company logo/Logomakr-templates-car-logo-1.jpg'
import logo7 from '../../assets/company logo/Logomakr-templates-fitness-1.jpg'
import logo8 from '../../assets/company logo/Logomakr-templates-organic-logo.jpg'
import logo9 from '../../assets/company logo/Logomakr-templates-your-band-logo.jpg'
import logo10 from '../../assets/company logo/Lona-Kova.webp'
import logo11 from '../../assets/company logo/Ryan-Bery.webp'
import logo12 from '../../assets/company logo/sun-set-club.jpg'
import logo13 from '../../assets/company logo/WV-Van-Logo-Photography.webp'
import logo14 from '../../assets/company logo/Logomakr-templates-excellent-logo.jpg'

const Partners = () => {
    return (
        <div className='partners mb-12'>
            <h2 className='text-4xl text-center mt-16 font-bold mb-10'>Our Clients and Partners</h2>
            <Marquee pauseOnHover={true} speed={100} className='flex items-center bg-slate-700 lg:h-72 md:h-72 h-auto'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
                <img src={logo8} alt="" />
                <img src={logo9} alt="" />
                <img src={logo10} alt="" />
                <img src={logo11} alt="" />
                <img src={logo12} alt="" />
                <img src={logo13} alt="" />
                <img src={logo14} alt="" />
            </Marquee>
        </div>
    );
};

export default Partners;