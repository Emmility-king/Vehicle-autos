import React from 'react';
import { Wrench, Shield, Car, Users, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Vehicle Sales',
      description: 'Premium selection of new and certified pre-owned vehicles from top manufacturers.',
      features: ['New Vehicle Sales', 'Certified Pre-Owned', 'Trade-In Evaluation', 'Financing Options']
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repair',
      description: 'Complete automotive service from routine maintenance to complex repairs.',
      features: ['Oil Changes', 'Brake Service', 'Engine Repair', 'Transmission Service']
    },
    {
      icon: Shield,
      title: 'Extended Warranties',
      description: 'Comprehensive warranty packages to protect your investment.',
      features: ['Powertrain Coverage', 'Bumper-to-Bumper', 'Roadside Assistance', 'Rental Car Coverage']
    },
    {
      icon: Users,
      title: 'Consultation Services',
      description: 'Expert advice to help you make the best automotive decisions.',
      features: ['Vehicle Inspection', 'Purchase Consultation', 'Market Analysis', 'Custom Solutions']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Efficient service that respects your time and schedule.'
    },
    {
      icon: Award,
      title: 'Certified Technicians',
      description: 'Factory-trained professionals with years of experience.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'All our work is backed by comprehensive warranties.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zinc-800 to-zinc-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-zinc-200">
            Comprehensive automotive solutions designed to meet all your vehicle needs 
            with professionalism and expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-800 mb-4">What We Offer</h2>
            <p className="text-xl text-zinc-600">
              Complete automotive solutions under one roof
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-zinc-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <IconComponent className="h-16 w-16 text-zinc-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-zinc-800 mb-4">{service.title}</h3>
                  <p className="text-zinc-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zinc-700">
                        <div className="w-2 h-2 bg-zinc-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-800 mb-4">Our Service Process</h2>
            <p className="text-xl text-zinc-600">
              Simple, transparent, and customer-focused approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-zinc-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">Consultation</h3>
              <p className="text-zinc-600">
                We discuss your needs and provide expert recommendations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zinc-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">Assessment</h3>
              <p className="text-zinc-600">
                Thorough evaluation and transparent pricing for all services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zinc-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">Service</h3>
              <p className="text-zinc-600">
                Professional execution with quality parts and expertise.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zinc-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">Follow-Up</h3>
              <p className="text-zinc-600">
                Ongoing support and maintenance recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-800 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-zinc-600">
              Experience the AutoElite difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-8 bg-zinc-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <IconComponent className="h-16 w-16 text-zinc-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-zinc-800 mb-4">{benefit.title}</h3>
                  <p className="text-zinc-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zinc-800 to-zinc-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-zinc-200">
            Contact us today to discuss your automotive needs
          </p>
          <a
            href="tel:+2348138201539"
            className="inline-flex items-center space-x-2 bg-zinc-600 hover:bg-zinc-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            <span>Call +234 813 820 1539</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;