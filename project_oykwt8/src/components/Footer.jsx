import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/businessdevelopment-experts", label: "LinkedIn" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/480956031758876", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/bizdevxperts/", label: "Instagram" },
    { icon: <FaPinterest />, url: "https://www.pinterest.com/bizdevxperts/", label: "Pinterest" },
    { icon: <FaTwitter />, url: "https://www.x.com/bizdevxperts", label: "X" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@bizdevxpert", label: "YouTube" },
    { icon: <FaGlobe />, url: "https://bizdevxperts.com/", label: "Website" }
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Business Development Experts</h3>
            <p className="mb-6">
              Helping businesses streamline operations and achieve strategic growth through expert virtual assistant services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="https://bizdevxperts.com/about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="https://bizdevxperts.com/blog" className="hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li>Email: info@bizdevxperts.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>
                <a 
                  href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
                  className="btn btn-primary mt-4"
                >
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Business Development Experts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
