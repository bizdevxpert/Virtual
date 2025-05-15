import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reclaim Your Time?</h2>
          <p className="text-xl mb-8">
            Our virtual assistants are ready to help you streamline your operations, increase productivity, and focus on growing your business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Book a Free Consultation</h3>
              <p className="mb-6">Discuss your needs with our experts and discover how we can help your business grow.</p>
              <a 
                href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
                className="btn bg-white text-primary hover:bg-gray-100 w-full"
              >
                Schedule Now
              </a>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Explore Our Services</h3>
              <p className="mb-6">Browse our complete range of business development and virtual assistant services.</p>
              <a 
                href="https://bizdevxperts.com/services" 
                className="btn bg-accent text-white hover:brightness-110 w-full"
              >
                View Services
              </a>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-lg mb-4">Have questions? We're here to help!</p>
            <a href="mailto:info@bizdevxperts.com" className="text-xl font-semibold hover:underline">
              info@bizdevxperts.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
