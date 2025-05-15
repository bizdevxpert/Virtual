import React from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "Working with Business Development Experts has been transformative for our company. Their virtual assistants have freed up at least 20 hours of my week, allowing me to focus on strategic initiatives that have grown our revenue by 35%."
  },
  {
    name: "Michael Chen",
    position: "Founder, GrowthLabs",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote: "I was drowning in administrative tasks before hiring BizDevXperts. Their VA services are professional, reliable, and incredibly detail-oriented. Now I can focus on what I do best while they handle the rest."
  },
  {
    name: "Amanda Rodriguez",
    position: "Real Estate Investor",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "The virtual assistants at Business Development Experts have been a game-changer for my real estate business. They handle everything from lead management to appointment scheduling, and I've been able to double my client base as a result."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners like you have experienced with our virtual assistant services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card flex flex-col h-full">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-4 text-yellow-400 flex">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-2">Join our satisfied clients today!</h3>
          <p className="text-lg mb-6">Experience the difference our virtual assistants can make for your business.</p>
          <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-primary">
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
