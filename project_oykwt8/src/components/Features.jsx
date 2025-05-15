import React from 'react';

const features = [
  {
    title: "Email Management",
    description: "Our VAs handle your inbox, filter important messages, and respond to routine inquiries, saving you hours each day.",
    icon: "📧"
  },
  {
    title: "Calendar Management",
    description: "Never miss an appointment again. We'll organize your schedule, set reminders, and coordinate meetings efficiently.",
    icon: "📅"
  },
  {
    title: "Data Entry & Research",
    description: "From CRM updates to market research, our assistants handle tedious data tasks with precision and attention to detail.",
    icon: "📊"
  },
  {
    title: "Customer Support",
    description: "Provide excellent customer service with our VAs handling inquiries, processing orders, and resolving basic issues.",
    icon: "🤝"
  },
  {
    title: "Social Media Management",
    description: "Maintain an active online presence with our VAs creating posts, responding to comments, and tracking engagement.",
    icon: "📱"
  },
  {
    title: "Document Preparation",
    description: "Get professional reports, presentations, and documents prepared efficiently and with attention to detail.",
    icon: "📄"
  }
];

const Features = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Virtual Assistant Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you need part-time support or a dedicated full-time assistant, we customize our services to fit your workflow so you can focus on strategic growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://bizdevxperts.com/services" className="btn btn-primary">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
