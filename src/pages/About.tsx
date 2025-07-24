import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Godspower Etinosa',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Over 15 years of experience in the automotive industry'
    },
    {
      name: 'Sarah Williams',
      role: 'Sales Director',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in luxury vehicle sales and customer relations'
    },
    {
      name: 'Michael Johnson',
      role: 'Service Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Certified automotive technician with specialized training'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zinc-800 to-zinc-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Power Auto Shop</h1>
          <p className="text-xl max-w-3xl mx-auto text-zinc-200">
            Your trusted partner in finding the perfect vehicle. We combine expertise, 
            integrity, and passion to deliver exceptional automotive experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-800 mb-6">Our Story</h2>
              <p className="text-lg text-zinc-600 mb-6">
                Founded with a vision to revolutionize the automotive buying experience, 
                AutoElite has grown from a small dealership to a trusted name in premium 
                vehicle sales across Nigeria.
              </p>
              <p className="text-lg text-zinc-600 mb-6">
                We believe that buying a car should be an exciting and transparent process. 
                That's why we've built our business on the pillars of trust, quality, and 
                exceptional customer service.
              </p>
              <p className="text-lg text-zinc-600">
                Every vehicle in our inventory is carefully selected and thoroughly inspected 
                to meet our high standards. We're not just selling cars; we're helping you 
                find the perfect companion for your journey.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Automotive showroom"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-800 mb-4">Our Values</h2>
            <p className="text-xl text-zinc-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Target className="h-16 w-16 text-zinc-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Excellence</h3>
              <p className="text-zinc-600">
                We strive for excellence in every interaction and transaction.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Heart className="h-16 w-16 text-zinc-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Integrity</h3>
              <p className="text-zinc-600">
                Honest, transparent dealings form the foundation of our business.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Users className="h-16 w-16 text-zinc-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Service</h3>
              <p className="text-zinc-600">
                Customer satisfaction is our top priority in everything we do.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Award className="h-16 w-16 text-zinc-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Quality</h3>
              <p className="text-zinc-600">
                We maintain the highest standards in our vehicle selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-zinc-600">
              Experienced professionals dedicated to your automotive needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-zinc-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-semibold text-zinc-800 mb-2">{member.name}</h3>
                <p className="text-zinc-600 font-medium mb-4">{member.role}</p>
                <p className="text-zinc-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;