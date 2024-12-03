import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <div className='px-4 md:px-10 lg:px-20'>
           <Helmet>
                <title>Elite Haven X || Contact us</title>
           </Helmet>
            <div className=' bg-slate-300 text-black my-7 p-7 rounded-lg' data-aos="flip-down" data-aos-duration="1500">
                <h2 className='text-lg font-medium'>Contact Us :</h2>
                <p className='mb-5'>We’re here to assist you! Whether you have questions, need more information about our services, or require support, we’re just a message or call away. At [Company Name], we value open communication and aim to provide the best possible experience for our customers.If you have any inquiries or comments, don’t hesitate to get in touch with us. Our team is dedicated to responding promptly and offering the support you need. Below are the various ways you can contact us:</p>
                <h2 className='text-lg font-medium'>Email Support : </h2>
                <p className='mb-5'>You can reach us directly via email at [your email address]. Whether it’s a simple question or a detailed request, we are here to help. Our email support team is available during business hours, and we strive to respond to all inquiries within [X hours/days].</p>
                <h2 className='text-lg font-medium'>Phone Support : </h2>
                <p className='mb-5'>If you prefer to speak with us over the phone, feel free to call us at [your phone number]. Our customer service representatives are available [mention working hours, e.g., Monday to Friday, 9 AM to 5 PM]. We’d be happy to provide you with any information or support you may need.</p>
                <h2 className='text-lg font-medium'>Visit Us in Person : </h2>
                <p className='mb-5'>For those who prefer face-to-face communication, you are welcome to visit us at our office location:[Your address]Our office hours are [mention office hours]. If you would like to schedule an appointment or confirm your visit in advance, feel free to give us a call or email.</p>
                <h2 className='text-lg font-medium'>Online Contact Form : </h2>
                <p className='mb-5'>Alternatively, you can fill out our convenient online contact form [link to form]. Just provide us with your details and message, and a member of our team will get back to you as soon as possible. We aim to ensure your experience is as smooth and hassle-free as possible.</p>
                <h2 className='text-lg font-medium'>Social Media : </h2>
                <p className='mb-5'>Connect with us on social media platforms for updates, announcements, and direct communication. Follow us on [list social media platforms] to stay in the loop.</p>
                <h2 className='text-lg font-medium'>Customer Support Hours : </h2>
                <p className='mb-5'>We are available for customer support during the following hours:Monday – Friday: [working hours]Saturday – Sunday: ClosedWe appreciate your interest in [Company Name] and look forward to assisting you. Your satisfaction is our priority, and we are committed to providing you with the best service possible.</p>
                <h2 className='text-lg font-medium mb-3'>You can contact us through the following :</h2>
                <div>
                    <div className='flex flex-col gap-4 md:flex-col lg:flex-row justify-between mb-4'>
                        <input type="email" className='input border border-black' placeholder='Email'/>
                        <input type="number" className='input border border-black' placeholder='Phone'/>
                        <input type="text" className='input border border-black' placeholder='Address'/>
                    </div>
                    <input type="submit" className='btn btn-secondary w-full' value={'Submit'} />
                </div>
            </div>
        </div>
    );
};

export default Contact;