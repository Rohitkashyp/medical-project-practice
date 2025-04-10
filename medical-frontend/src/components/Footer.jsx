import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
     
        <div>
          <h2 className="text-xl font-bold mb-2">MedSupply</h2>
          <p className="text-sm">Reliable Medical Equipment at Your Doorstep.</p>
        </div>

      
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/product" className="hover:text-blue-400">Products</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: support@medsupply.com</p>
          <p className="text-sm">Phone: +91 9634895608</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-blue-400"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

 
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} MedSupply. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
