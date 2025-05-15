import React from 'react';
import YouTube from 'react-youtube';
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { BsGlobe } from 'react-icons/bs';

function App() {
  const videoOpts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            Business Development Experts
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="font-medium hover:text-primary transition-colors">Services</a>
            <a href="#benefits" className="font-medium hover:text-primary transition-colors">Benefits</a>
            <a href="#testimonials" className="font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden md:block">
            Book Free Consultation
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Streamline Your Business with Expert Virtual Assistants
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Focus on growing your business while our professional virtual assistants handle your day-to-day operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Book Free Consultation
                </a>
                <a href="https://bizdevxperts.com/services" target="_blank" rel="noopener noreferrer" className="btn bg-white text-primary hover:bg-blue-100">
                  Explore Our Services
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <YouTube videoId="arwVmsA3wR4" opts={videoOpts} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Virtual Assistant Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customized solutions to help you reclaim your time and focus on what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Calendar Management</h3>
              <p className="text-gray-600">
                Never miss an important meeting again. Our VAs will handle your scheduling, send reminders, and coordinate with clients.
              </p>
            </div>

            <div className="card">
              <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Email Management</h3>
              <p className="text-gray-600">
                Regain control of your inbox. We'll filter, organize, and respond to emails based on your preferences.
              </p>
            </div>

            <div className="card">
              <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Data Entry & Management</h3>
              <p className="text-gray-600">
                Keep your records accurate and up-to-date with our meticulous data entry and management services.
              </p>
            </div>

            <div className="card">
              <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Support</h3>
              <p className="text-gray-600">
                Provide excellent customer service without the overhead. Our VAs can handle inquiries, support tickets, and follow-ups.
              </p>
            </div>

            <div className="card">
              <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Research & Analysis</h3>
              <p className="text-gray-600">
                Get the information you need to make informed decisions. Our VAs can conduct market research, competitor analysis, and more.
              </p>
            </div>

            <div className="card">
              <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media Management</h3>
              <p className="text-gray-600">
                Maintain an active online presence without the time commitment. We'll create, schedule, and monitor your social media content.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://bizdevxperts.com/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Virtual Assistants?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional, dedicated virtual assistant services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Professional virtual assistant" className="rounded-xl shadow-lg w-full h-auto" />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <span className="text-accent mr-3">01</span>
                  Customized to Your Workflow
                </h3>
                <p className="text-gray-600">
                  We adapt to your existing processes and tools, creating a seamless integration that feels like an extension of your team.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <span className="text-accent mr-3">02</span>
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600">
                  Whether you need part-time support or a dedicated full-time assistant, we offer flexible options to match your requirements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <span className="text-accent mr-3">03</span>
                  Cost-Effective Solution
                </h3>
                <p className="text-gray-600">
                  Save on hiring, training, benefits, and office space while still getting professional administrative support.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <span className="text-accent mr-3">04</span>
                  Focus on Strategic Growth
                </h3>
                <p className="text-gray-600">
                  Delegate time-consuming tasks and reclaim hours in your day to focus on the high-value activities that drive your business forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business owners like you have experienced.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-accent text-4xl mb-4">
                <BiSolidQuoteAltLeft />
              </div>
              <p className="text-gray-600 mb-6">
                "Hiring a virtual assistant from Business Development Experts was one of the best decisions I've made for my company. I've reclaimed at least 15 hours per week that I can now dedicate to growing my business."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80" alt="Sarah Johnson" className="w-12 h-12 object-cover rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">CEO, Marketing Agency</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text-accent text-4xl mb-4">
                <BiSolidQuoteAltLeft />
              </div>
              <p className="text-gray-600 mb-6">
                "The level of professionalism and attention to detail is outstanding. My VA quickly learned our systems and has become an invaluable part of our team. The flexibility to scale hours as needed has been perfect for our seasonal business."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" alt="Michael Rodriguez" className="w-12 h-12 object-cover rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Michael Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Founder, E-commerce Store</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text-accent text-4xl mb-4">
                <BiSolidQuoteAltLeft />
              </div>
              <p className="text-gray-600 mb-6">
                "I was drowning in administrative tasks before finding Business Development Experts. Now my inbox is organized, my calendar is managed efficiently, and I can focus on client meetings and strategy. The ROI has been tremendous."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80" alt="Jennifer Chen" className="w-12 h-12 object-cover rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Jennifer Chen</h4>
                  <p className="text-gray-500 text-sm">Independent Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reclaim Your Time?</h2>
            <p className="text-xl mb-8">
              Schedule a free consultation to discuss how our virtual assistant services can be tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" target="_blank" rel="noopener noreferrer" className="btn bg-white text-primary hover:bg-blue-100">
                Book Free Consultation
              </a>
              <a href="https://bizdevxperts.com/services" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Business Development Experts</h3>
              <p className="text-gray-400 mb-4">
                Helping businesses streamline operations and focus on strategic growth through professional virtual assistant services.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/businessdevelopment-experts" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.facebook.com/480956031758876" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebookSquare size={24} />
                </a>
                <a href="https://www.instagram.com/bizdevxperts/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.pinterest.com/bizdevxperts/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaPinterest size={24} />
                </a>
                <a href="https://www.x.com/bizdevxperts" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaXTwitter size={24} />
                </a>
                <a href="https://www.youtube.com/@bizdevxpert" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaYoutube size={24} />
                </a>
                <a href="https://bizdevxperts.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <BsGlobe size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Calendar Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Email Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Entry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research & Analysis</a></li>
                <li><a href="https://bizdevxperts.com/services" className="text-gray-400 hover:text-white transition-colors">View All Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="text-gray-400 hover:text-white transition-colors">Book Consultation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@bizdevxperts.com</li>
                <li className="text-gray-400">Phone: (555) 123-4567</li>
                <li className="mt-4">
                  <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                    Schedule a Call
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Business Development Experts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
