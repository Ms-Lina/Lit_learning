// src/components/LandingPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://external-preview.redd.it/TYeW6XF5Fl5a_a9vO5VJfFQvGetpEKl4byP8p20m0gk.jpg?width=1080&crop=smart&auto=webp&s=5029e91450931c559500525000ed520749d344b6",
      title: "Transform Your Learning Journey",
      description: "Discover a world of knowledge with our expert-led courses"
    },
    {
      image: "https://refugees.org/wp-content/uploads/2024/05/PostFeatureImg-23-1024x335.png",
      title: "Learn at Your Own Pace",
      description: "Flexible learning paths designed for your success"
    },
    {
      image: "https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-1213738982.jpg.webp?itok=yDrqhLXg",
      title: "Join Our Community",
      description: "Connect with learners and experts worldwide"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50">
              <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                <div className="text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                  <Link
                    to="/courses"
                    className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LITLIFE?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with lifetime access to courses.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Interactive Content</h3>
              <p className="text-gray-600">Engage with hands-on projects and real-world applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default LandingPage;