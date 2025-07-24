import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+234 813 820 1539',
      action: 'tel:+2348138201539'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@autoelite.com',
      action: 'mailto:info@autoelite.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Lagos, Nigeria',
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 8AM - 6PM',
      action: null
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zinc-800 to-zinc-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-zinc-200">
            Get in touch with our team for all your automotive needs. 
            We're here to help you find the perfect vehicle.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="text-center p-8 bg-zinc-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <IconComponent className="h-12 w-12 text-zinc-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-zinc-800 mb-2">{info.title}</h3>
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-zinc-600 hover:text-zinc-800 transition-colors duration-200"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-zinc-600">{info.details}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zinc-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="vehicle-inquiry">Vehicle Inquiry</option>
                      <option value="service-request">Service Request</option>
                      <option value="financing">Financing Options</option>
                      <option value="trade-in">Trade-In Evaluation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-zinc-800 mb-4">Visit Our Showroom</h3>
                <p className="text-zinc-600 mb-6">
                  Experience our vehicles in person at our modern showroom. Our team is ready 
                  to assist you with expert advice and personalized service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-zinc-500" />
                    <span className="text-zinc-700">Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-zinc-500" />
                    <span className="text-zinc-700">Monday - Saturday: 8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-zinc-500" />
                    <span className="text-zinc-700">Sunday: Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-zinc-800 mb-4">Quick Response</h3>
                <p className="text-zinc-600 mb-6">
                  Need immediate assistance? Call us directly for the fastest response to your 
                  automotive needs.
                </p>
                <a
                  href="tel:+2348138201539"
                  className="w-full bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call +234 813 820 1539</span>
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-zinc-800 mb-4">What to Expect</h3>
                <ul className="space-y-3 text-zinc-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Personalized consultation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert automotive advice</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>No-pressure sales approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;