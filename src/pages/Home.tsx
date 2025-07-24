import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, Phone } from 'lucide-react';

const Home = () => {
  const featuredCars = [
    {
      id: 1,
      name: 'BMW X5 2023',
      price: '₦45,000,000',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Automatic', 'V6 Engine', 'AWD', 'Leather Interior']
    },
    {
      id: 2,
      name: 'Mercedes C-Class 2024',
      price: '₦38,500,000',
      image: 'https://images.pexels.com/photos/4290019/pexels-photo-4290019.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Automatic', 'Turbo', 'Premium Sound', 'Navigation']
    },
    {
      id: 3,
      name: 'Toyota Camry 2023',
      price: '₦28,000,000',
      image: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Hybrid', 'Automatic', 'Safety+', 'Backup Camera']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zinc-800 to-zinc-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center h-screen flex items-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        >
          <div className="absolute inset-0 bg-zinc-800 opacity-60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Premium <span className="text-zinc-300">Automobiles</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-zinc-200">
              Discover luxury and performance with our curated selection of premium vehicles. 
              Your dream car awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/inventory"
                className="bg-zinc-600 hover:bg-zinc-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Inventory</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+2348138201539"
                className="border-2 border-zinc-400 hover:bg-zinc-400 hover:text-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-800 mb-4">Why Choose Power Auto Shop?</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              We're committed to providing exceptional automotive experiences with integrity and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-zinc-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <Shield className="h-16 w-16 text-zinc-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-zinc-800 mb-4">Quality Assurance</h3>
              <p className="text-zinc-600">
                Every vehicle undergoes rigorous inspection to ensure the highest quality and reliability standards.
              </p>
            </div>
            
            <div className="text-center p-8 bg-zinc-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <Users className="h-16 w-16 text-zinc-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-zinc-800 mb-4">Expert Service</h3>
              <p className="text-zinc-600">
                Our experienced team provides personalized service to help you find the perfect vehicle.
              </p>
            </div>
            
            <div className="text-center p-8 bg-zinc-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <Award className="h-16 w-16 text-zinc-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-zinc-800 mb-4">Trusted Reputation</h3>
              <p className="text-zinc-600">
                Built on years of satisfied customers and a commitment to excellence in automotive sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-800 mb-4">Featured Vehicles</h2>
            <p className="text-xl text-zinc-600">
              Explore our handpicked selection of premium automobiles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-zinc-800 mb-2">{car.name}</h3>
                  <p className="text-3xl font-bold text-zinc-600 mb-4">{car.price}</p>
                  <div className="space-y-1 mb-6">
                    {car.features.map((feature, index) => (
                      <span key={index} className="inline-block bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="w-full bg-zinc-700 hover:bg-zinc-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 text-center block"
                  >
                    Contact for Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/inventory"
              className="inline-flex items-center space-x-2 bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              <span>View All Vehicles</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;