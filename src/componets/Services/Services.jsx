import React from 'react';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SiTheboringcompany } from "react-icons/si";
import { FaFireAlt } from "react-icons/fa";
import { MdNewReleases } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaAssistiveListeningSystems } from "react-icons/fa";

const Services = () => {
    return (
        <div className='mb-9 mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-16 lg:px-32 px-5 gap-10 bg-slate-400 text-black py-5'>
            <div>
                <h2 className='font-medium text-lg flex items-center gap-3'><SiTheboringcompany className='text-5xl'></SiTheboringcompany > Agency Leasing</h2>
                <p>Agency Leasing refers to the process where a real estate firm represents property owners or landlords to market and lease their commercial properties. The goal is to attract tenants, negotiate favorable lease terms, and maximize the property's occupancy and value. This involves creating marketing strategies, identifying potential tenants, managing lease agreements, and ensuring the property meets market demands.</p>
            </div>
            <div>
                <h2 className='font-medium text-lg flex items-center gap-3'><FaMoneyCheckDollar className='text-5xl'></FaMoneyCheckDollar> Property and Asset Management</h2>
                <p>Property and Asset Management involves the strategic operation, maintenance, and oversight of real estate properties and tangible/intangible assets to maximize their value, efficiency, and profitability. This includes activities such as leasing, financial management, repairs, compliance, risk assessment, and lifecycle management, ensuring assets are aligned with business objectives and stakeholders' expectations.</p>
            </div>
            <div>
                <h2 className='font-medium text-lg flex items-center gap-3'><FaFireAlt className='text-5xl'></FaFireAlt> Real Estate Intelligence Service</h2>
                <p>A Real Estate Intelligence Service provides data-driven insights, analytics, and market trends to support informed decision-making in property investments, sales, and development. It leverages technology, such as AI and big data, to offer tailored solutions for market analysis, property valuations, and forecasting, helping clients maximize opportunities and minimize risks.</p>
            </div>
            <div>
                <h2 className='font-medium text-lg flex gap-3 items-center'><MdNewReleases className='text-5xl'></MdNewReleases> Lease Administration</h2>
                <p>Lease Administration involves managing all aspects of a lease portfolio for property owners, tenants, or real estate managers. It includes tasks such as tracking lease agreements, ensuring compliance with terms, managing critical dates (e.g., renewals and expirations), processing payments (rent, utilities, or escalations), and maintaining accurate records. The goal is to streamline lease processes, mitigate risks, optimize costs, and ensure operational efficiency.</p>
            </div>
            <div>
                <h2 className='font-medium text-lg flex gap-3 items-center'><AiOutlineTransaction className='text-5xl'></AiOutlineTransaction> Transaction Management</h2>
                <p>Transaction Management refers to the process of managing a set of operations or tasks (known as a transaction) to ensure they are executed reliably and adhere to the properties of ACID (Atomicity, Consistency, Isolation, Durability). It is commonly used in databases to ensure data integrity, especially in multi-user environments.</p>
            </div>
            <div>
                <h2 className='font-medium text-lg flex gap-3 items-center'><FaAssistiveListeningSystems className='text-5xl'></FaAssistiveListeningSystems> Strategic Consulting</h2>
                <p>Strategic Consulting involves providing expert advice to organizations to help them achieve their long-term goals, improve performance, and navigate complex challenges. Consultants analyze market trends, internal capabilities, and competitive landscapes to develop tailored strategies for growth, efficiency, and innovation. This field covers areas like business transformation, market entry, organizational design, and risk management, focusing on aligning resources and operations with the company's overarching vision.</p>
            </div>
        </div>
    );
};

export default Services;