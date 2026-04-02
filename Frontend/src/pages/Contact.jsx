import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Contact = () => {
  return (
    <>
    <Nav/>
    <div className="mt-25 min-h-screen flex flex-col items-center">
      
      {/* Header Section */}
      <div className="text-center mb-4 animate-fade-in-down">
        <h2 className="text-3xl font-light tracking-widest text-gray-500 uppercase">
          Contact <span className="font-bold text-gray-800">Us</span>
        </h2>
        <div className="h-1 w-16 bg-blue-500 mx-auto mt-1 rounded-full"></div>
      </div>

      {/* Main Content Card */}
      <div className="max-h-[370px] max-w-4xl w-full bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 shadow-[5px_10px_23px_1px] shadow-black hover:scale-105 trantion-all duration-700">
  
        {/* Image Section */}
        <div className="md:w-1/2 overflow-hidden group">
          <img 
            src={assets.contact_image}
            alt="Medical Professional" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-8 animate-fade-in-right">
          
          {/* Office Details */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-1 border-b pb-1">OUR OFFICE</h3>
            <div className="text-gray-500 space-y-1 leading-relaxed">
              <p>Somewhere around!!</p>
            </div>
            <div className="mt-2 text-gray-500 space-y-1">
              <p><span className="font-medium text-gray-700">Tel:</span> (415) XXXXXXXX</p>
            </div>
          </section>

          {/* Careers Section */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">CAREERS AT PRESCRIPTO</h3>
            <p className="text-gray-500 mb-6">
              We dont HIRE!! Thank you
            </p>
            
            <button className="cursor-pointer px-8 py-3 border border-gray-800 text-gray-800 font-medium rounded-sm hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
              Explore Jobs
            </button>
          </section>

        </div>
      </div>

      {/* Extra "Precise" Footer Info to ground the page */}
      <div className="mt-12 text-center text-gray-400 text-sm max-w-md animate-pulse">
        <p>Available for inquiries Monday to Friday, 9:00 AM - 6:00 PM EST. Our team typically responds within 24 business hours.</p>
      </div>

    </div>
    <Footer/>
    </>
  );
};

export default Contact;