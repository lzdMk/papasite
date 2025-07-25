import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Wrench, Monitor, Wind, Waves, PlayCircle, Refrigerator, Star, Clock, Award } from 'lucide-react';

const PapasRepairShop = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const services = [
    { icon: Monitor, name: 'TV Repair', desc: 'LED, LCD, Smart TV - lahat kaya namin' },
    { icon: Waves, name: 'Amplifier', desc: 'Sound system, speakers, audio equipment' },
    { icon: Wind, name: 'Washing Machine', desc: 'Front load, top load, automatic' },
    { icon: PlayCircle, name: 'DVD Player', desc: 'CD, DVD, Blu-ray players' },
    { icon: Wind, name: 'Aircon', desc: 'Window type, split type, inverter' },
    { icon: Refrigerator, name: 'Refrigerator', desc: 'Single door, double door, inverter ref' }
  ];

  const testimonials = [
    {
      name: 'Aling Rosa',
      location: 'Quezon City',
      text: 'Grabe, ang galing ni Papa! Yung ref namin na 10 years na, nabuhay ulit. Sulit na sulit!',
      rating: 5
    },
    {
      name: 'Kuya Jun',
      location: 'QC',
      text: 'Mabilis at mura! Yung TV namin na sira na matagal, okay na agad. Salamat Papa!',
      rating: 5
    },
    {
      name: 'Ate Marie',
      location: 'Quezon City',
      text: 'Trusted talaga si Papa. Lahat ng appliances namin, dito na kami nagpapa-repair.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Wrench className="text-blue-400 w-8 h-8" />
              <span className="text-xl font-bold">Papa's Electronic Repair</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-animate id="hero-text" className={`transition-all duration-1000 ${isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Papa's Electronic Repair Shop
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                <span className="text-blue-400">"Sira? Hindi problema!"</span><br />
                Lahat ng electronic appliances, kaya namin ayusin!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Makipag-ugnayan Na!
                </button>
                <a 
                  href="https://www.facebook.com/papaelectronicrepair" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all flex items-center justify-center space-x-2"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook Page</span>
                </a>
              </div>
            </div>
            <div data-animate id="hero-image" className={`transition-all duration-1000 delay-300 ${isVisible['hero-image'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/600x400/1f2937/3b82f6?text=Papa%27s+Repair+Shop" 
                  alt="Papa's Electronic Repair Shop"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div data-animate id="services-header" className={`text-center mb-16 transition-all duration-1000 ${isVisible['services-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Mga Services Namin</h2>
            <p className="text-xl text-gray-300">Lahat ng electronic appliances, kaya namin i-repair!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  data-animate 
                  id={`service-${index}`}
                  className={`bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 hover:shadow-lg border border-gray-600 hover:border-blue-500/50 transition-all duration-500 delay-${index * 100} ${isVisible[`service-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <Icon className="text-blue-400 w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-blue-300">{service.name}</h3>
                  <p className="text-gray-300">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div data-animate id="why-header" className={`text-center mb-16 transition-all duration-1000 ${isVisible['why-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Bakit Papa's ang Pipiliin Mo?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div data-animate id="why-1" className={`text-center p-6 transition-all duration-1000 ${isVisible['why-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Clock className="text-blue-400 w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Mabilis na Service</h3>
              <p className="text-gray-300">Same day repair for most appliances. Hindi ka maghihintay ng matagal!</p>
            </div>
            <div data-animate id="why-2" className={`text-center p-6 transition-all duration-1000 delay-200 ${isVisible['why-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Award className="text-blue-400 w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Experienced Technician</h3>
              <p className="text-gray-300">Mahigit 15 years na experience ni Papa sa pag-repair ng electronics!</p>
            </div>
            <div data-animate id="why-3" className={`text-center p-6 transition-all duration-1000 delay-400 ${isVisible['why-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Star className="text-blue-400 w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Affordable Prices</h3>
              <p className="text-gray-300">Mura lang pero quality ang service. Walang hidden fees, transparent pricing!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div data-animate id="testimonial-header" className={`text-center mb-16 transition-all duration-1000 ${isVisible['testimonial-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Mga Testimonials</h2>
            <p className="text-xl text-gray-300">Ano ang sabi ng mga satisfied customers namin</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg border border-gray-600">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-6 h-6 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl italic text-gray-300 mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <cite className="text-blue-400 font-semibold">
                  {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].location}
                </cite>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-animate id="about-image" className={`transition-all duration-1000 ${isVisible['about-image'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <img 
                src="https://via.placeholder.com/500x400/1f2937/3b82f6?text=About+Papa%27s+Shop" 
                alt="About Papa's Electronic Repair"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div data-animate id="about-text" className={`transition-all duration-1000 delay-300 ${isVisible['about-text'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-4xl font-bold mb-6">About Papa's Electronic Repair</h2>
              <p className="text-lg text-gray-300 mb-6">
                Simula pa noong 2008, naging trusted name na si Papa sa Quezon City pagdating sa electronic repair. 
                Nagsimula lang sa maliit na workshop, pero dahil sa quality service at mababait na customers, 
                lumalaki na rin ang aming shop.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Si Papa mismo ang mag-aayos ng inyong appliances. Hindi kami nagmamadali sa trabaho - 
                gusto namin siguradong tatagal pa ng matagal yung repair namin.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800 px-4 py-2 rounded-lg border border-blue-500/30">
                  <span className="text-blue-400 font-semibold">15+ Years</span> Experience
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg border border-blue-500/30">
                  <span className="text-blue-400 font-semibold">1000+</span> Satisfied Customers
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg border border-blue-500/30">
                  <span className="text-blue-400 font-semibold">Same Day</span> Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div data-animate id="contact-header" className={`text-center mb-16 transition-all duration-1000 ${isVisible['contact-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Makipag-ugnayan Sa Amin</h2>
            <p className="text-xl text-gray-300">May sira na appliance? Tawagan lang si Papa!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div data-animate id="contact-info" className={`transition-all duration-1000 ${isVisible['contact-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gray-700 p-8 rounded-lg border border-gray-600">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-blue-400 w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-300">Address</p>
                      <p className="text-gray-300">23 Chestnut Ext, Quezon City, Philippines, 1121</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-blue-400 w-6 h-6" />
                    <div>
                      <p className="font-semibold text-blue-300">Mobile</p>
                      <a href="tel:09776074426" className="text-gray-300 hover:text-blue-400 transition-colors">
                        0977 607 4426
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-blue-400 w-6 h-6" />
                    <div>
                      <p className="font-semibold text-blue-300">Email</p>
                      <a href="mailto:menardpapa5@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                        menardpapa5@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Facebook className="text-blue-400 w-6 h-6" />
                    <div>
                      <p className="font-semibold text-blue-300">Facebook Page</p>
                      <a 
                        href="https://www.facebook.com/papaelectronicrepair" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        Message us on Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-animate id="contact-map" className={`transition-all duration-1000 delay-300 ${isVisible['contact-map'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gray-700 p-8 rounded-lg border border-gray-600 h-full">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">Shop Location</h3>
                <div className="h-64 bg-gray-600 rounded-lg flex items-center justify-center">
                  <img 
                    src="https://via.placeholder.com/400x200/374151/3b82f6?text=Map+Location+Placeholder" 
                    alt="Shop Location Map"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2 text-blue-300">Shop Hours</h4>
                  <p className="text-gray-300 mb-2">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 mb-4">Sunday: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-gray-400">
                    *Emergency repairs available. Tumawag lang para sa appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="text-blue-400 w-8 h-8" />
                <span className="text-xl font-bold">Papa's Electronic Repair</span>
              </div>
              <p className="text-gray-400">
                Ang pinagkakatiwalaang electronic repair shop sa Quezon City. 
                Mura, mabilis, at quality service guaranteed!
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-blue-400 transition-colors">Home</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-blue-400 transition-colors">Services</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-blue-400 transition-colors">About</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-blue-400 transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/papaelectronicrepair" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-8 h-8" />
                </a>
                <a 
                  href="tel:09776074426"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-8 h-8" />
                </a>
                <a 
                  href="mailto:menardpapa5@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Papa's Electronic Repair Shop. All rights reserved. 
              <span className="text-blue-400"> Made with ❤️ for QC families.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PapasRepairShop;