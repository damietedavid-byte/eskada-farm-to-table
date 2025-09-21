import React from 'react';
import { BusinessIcon } from '../assets/CategoryIcons';

const ConsultationPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-eskada-green mb-4">Business Consultation Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leveraging over 20 years of experience in agribusiness and oil & gas mediation to drive your success.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-eskada-green">Our Expertise</h2>
                <p className="text-gray-700 leading-relaxed">
                    At Eskada, we offer more than just premium farm products. Our consultancy arm is built on a foundation of two decades of hands-on experience in Nigeria's complex business landscape. We specialize in providing strategic guidance for agribusiness ventures and expert mediation services for the oil and gas sector.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Agribusiness Strategy & Market Entry</li>
                    <li>Supply Chain Optimization</li>
                    <li>Community Engagement & Mediation</li>
                    <li>Regulatory Compliance Advisory</li>
                    <li>Project Feasibility Studies</li>
                </ul>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-xl flex items-center justify-center p-8 min-h-[300px]">
                <BusinessIcon className="w-32 h-32 text-eskada-green" />
            </div>
        </div>

        <div className="mt-20 bg-eskada-bg p-8 md:p-12 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-semibold text-eskada-green mb-6">Book an Inquiry</h2>
                    <p className="text-gray-700 mb-6">
                        Ready to take the next step? Fill out the form below, and our team will get in touch to schedule a preliminary discussion about your needs.
                    </p>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-eskada-light-green focus:border-eskada-light-green" required />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-eskada-light-green focus:border-eskada-light-green" required />
                        </div>
                         <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service of Interest</label>
                            <select id="service" name="service" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-eskada-light-green focus:border-eskada-light-green">
                                <option>Agribusiness Consulting</option>
                                <option>Oil & Gas Mediation</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-eskada-light-green focus:border-eskada-light-green" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-eskada-green text-white py-3 px-4 rounded-md hover:bg-eskada-light-green transition-colors duration-300">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
                 <div className="flex flex-col">
                    <h2 className="text-3xl font-semibold text-eskada-green mb-6">Schedule Directly</h2>
                    <p className="text-gray-700 mb-6">
                        Alternatively, you can book a slot directly on our calendar.
                    </p>
                    <div className="flex-grow bg-gray-200 rounded-lg flex items-center justify-center p-4">
                        <p className="text-gray-600 text-center font-medium">Calendar booking integration (e.g., Calendly) would be embedded here.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;