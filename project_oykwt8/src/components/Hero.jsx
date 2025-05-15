import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Boost Your Productivity with Expert <span className="text-primary">Virtual Assistants</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
              Streamline your operations with our professional virtual assistants who handle scheduling, email management, data entry, and more. Focus on what matters most - growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-primary text-lg">
                Book a Free Consultation
              </a>
              <a href="https://bizdevxperts.com/services" className="btn bg-white border border-primary text-primary hover:bg-blue-50 text-lg">
                Explore Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Virtual Assistant Services" 
                className="rounded-xl shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
