import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../assets/logos';

const Footer: React.FC = () => {
  return (
    <footer className="bg-eskada-green text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-eskada-gold tracking-wider mb-4">ESKADA</h3>
            <p className="text-gray-300">
              Fresh farm products from Port Harcourt, Nigeria. Quality, integrity, and sustainability in every harvest.
            </p>
            <p className="text-gray-300 mt-2">Nationwide delivery available.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><Link to="/products" className="hover:text-eskada-gold transition-colors">Products</Link></li>
              <li className="mb-2"><Link to="/gallery" className="hover:text-eskada-gold transition-colors">Gallery</Link></li>
              <li className="mb-2"><Link to="/consultation" className="hover:text-eskada-gold transition-colors">Consultation</Link></li>
              <li className="mb-2"><Link to="/blog" className="hover:text-eskada-gold transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul>
              <li className="mb-2"><Link to="/products/fish" className="hover:text-eskada-gold transition-colors">Fish Products</Link></li>
              <li className="mb-2"><Link to="/products/palm" className="hover:text-eskada-gold transition-colors">Palm Products</Link></li>
              <li className="mb-2"><Link to="/products/fruits" className="hover:text-eskada-gold transition-colors">Fruits</Link></li>
              <li className="mb-2"><Link to="/products/vegetables" className="hover:text-eskada-gold transition-colors">Vegetables</Link></li>
              <li className="mb-2"><Link to="/products/export" className="hover:text-eskada-gold transition-colors">Export Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <p className="mb-2">Port Harcourt, Nigeria</p>
            <p className="mb-2"><a href="mailto:sukaribayoudeowei@gmail.com" className="hover:text-eskada-gold">sukaribayoudeowei@gmail.com</a></p>
            <p className="mb-2"><a href="tel:+2348033107200" className="hover:text-eskada-gold">+234 803 310 7200</a></p>
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-eskada-gold transition-colors"><FacebookIcon className="h-6 w-6" /></a>
                  <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-eskada-gold transition-colors"><InstagramIcon className="h-6 w-6" /></a>
                  <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-eskada-gold transition-colors"><TwitterIcon className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Eskada. All Rights Reserved. Built with Passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
