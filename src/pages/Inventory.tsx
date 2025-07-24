import React, { useState } from 'react';
import { Search, Filter, Phone } from 'lucide-react';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const vehicles = [
    {
      id: 1,
      name: 'BMW X5 2023',
      category: 'suv',
      price: '₦45,000,000',
      year: 2023,
      mileage: '15,000 km',
      transmission: 'Automatic',
      fuel: 'Petrol',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['AWD', 'Leather Interior', 'Navigation', 'Backup Camera']
    },
    {
      id: 2,
      name: 'Mercedes C-Class 2024',
      category: 'sedan',
      price: '₦38,500,000',
      year: 2024,
      mileage: '8,000 km',
      transmission: 'Automatic',
      fuel: 'Petrol',
      image: 'https://images.pexels.com/photos/4290019/pexels-photo-4290019.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Turbo', 'Premium Sound', 'Sunroof', 'Heated Seats']
    },
    {
      id: 3,
      name: 'Toyota Camry 2023',
      category: 'sedan',
      price: '₦28,000,000',
      year: 2023,
      mileage: '12,000 km',
      transmission: 'Automatic',
      fuel: 'Hybrid',
      image: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Hybrid', 'Safety+', 'Backup Camera', 'Bluetooth']
    },
    {
      id: 4,
      name: 'Range Rover Sport 2023',
      category: 'suv',
      price: '₦85,000,000',
      year: 2023,
      mileage: '5,000 km',
      transmission: 'Automatic',
      fuel: 'Petrol',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['4x4', 'Premium Interior', 'Adaptive Cruise', 'Air Suspension']
    },
    {
      id: 5,
      name: 'Lexus ES 2023',
      category: 'sedan',
      price: '₦42,000,000',
      year: 2023,
      mileage: '18,000 km',
      transmission: 'Automatic',
      fuel: 'Petrol',
      image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Luxury Package', 'Premium Audio', 'Navigation', 'Leather']
    },
    {
      id: 6,
      name: 'Honda CR-V 2024',
      category: 'suv',
      price: '₦32,500,000',
      year: 2024,
      mileage: '3,000 km',
      transmission: 'Automatic',
      fuel: 'Petrol',
      image: 'https://images.pexels.com/photos/19686969/pexels-photo-19686969.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['AWD', 'Honda Sensing', 'Panoramic Roof', 'Wireless Charging']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Vehicles' },
    { value: 'sedan', label: 'Sedans' },
    { value: 'suv', label: 'SUVs' },
    { value: 'coupe', label: 'Coupes' },
    { value: 'truck', label: 'Trucks' }
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || vehicle.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 min-h-screen bg-zinc-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-zinc-800 to-zinc-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Vehicle Inventory</h1>
          <p className="text-xl text-zinc-200">
            Browse our complete selection of premium vehicles
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent appearance-none bg-white min-w-48"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredVehicles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-zinc-600">No vehicles found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-zinc-600">
                  Showing {filteredVehicles.length} of {vehicles.length} vehicles
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-zinc-800 mb-2">{vehicle.name}</h3>
                      <p className="text-3xl font-bold text-zinc-600 mb-4">{vehicle.price}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-zinc-600">
                        <div>
                          <span className="font-medium">Year:</span> {vehicle.year}
                        </div>
                        <div>
                          <span className="font-medium">Mileage:</span> {vehicle.mileage}
                        </div>
                        <div>
                          <span className="font-medium">Transmission:</span> {vehicle.transmission}
                        </div>
                        <div>
                          <span className="font-medium">Fuel:</span> {vehicle.fuel}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        {vehicle.features.map((feature, index) => (
                          <span key={index} className="inline-block bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href="tel:+2348138201539"
                        className="w-full bg-zinc-700 hover:bg-zinc-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 text-center flex items-center justify-center space-x-2"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call for Details</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Inventory;