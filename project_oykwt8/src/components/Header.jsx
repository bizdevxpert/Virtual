import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            Business Development Experts
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium hover:text-primary transition-colors">Services</a>
          <a href="#how-it-works" className="font-medium hover:text-primary transition-colors">How It Works</a>
          <a href="#testimonials" className="font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-primary">Book a Call</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
              className="btn btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
