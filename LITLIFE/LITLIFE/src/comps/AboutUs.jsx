import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


const AboutUs = () => {
  const teamMembers = [
    { 
      name: '', 
      role: 'Founder & CEO', 
      image: '/api/placeholder/400/400' 
    },
    { 
      name: '', 
      role: 'Chief Technology Officer', 
      image: '/api/placeholder/400/400' 
    },
    { 
      name: '', 
      role: 'Head of Product', 
      image: '/api/placeholder/400/400' 
    }
  ];

  return (
  <>
  <Navbar/>
     <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Our Company
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about creating innovative solutions that transform the way businesses operate and people live.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* <Users className="mx-auto mb-4 text-primary" size={64} /> */}
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Empowering businesses with cutting-edge technology and innovative solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* <Target className="mx-auto mb-4 text-primary" size={64} /> */}
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be a global leader in technological innovation and digital transformation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* <Award className="mx-auto mb-4 text-primary" size={64} /> */}
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, innovation, collaboration, and continuous learning.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
 
  );
};

export default AboutUs;