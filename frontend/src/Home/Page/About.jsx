import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-600">Discover who we are and what drives us to make a difference.</p>
      </div>
      
      <div className="flex flex-wrap justify-center">
        {/* Mission Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              Our mission is to empower individuals to lead healthier lives by offering insightful and comprehensive nutritional data. We aim to foster healthier eating habits and promote well-being.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              We envision a world where everyone has access to the knowledge and tools needed to make informed decisions about their diet and lifestyle. Our vision is to be a leading provider of nutritional information and health resources globally.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Customer Focus</li>
              <li>Teamwork</li>
              <li>Health and Wellness</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        {/* History Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Our History</h3>
            <p className="text-gray-700">
              Founded in 2024, our company has grown from a small startup to a trusted resource in the health and nutrition sector. Over the years, we have expanded our offerings and continually improved our services to meet the needs of our users.
            </p>
          </div>
        </div>

        {/* Community Engagement Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Community Engagement</h3>
            <p className="text-gray-700">
              We believe in giving back to the community. Our initiatives include educational programs, partnerships with local health organizations, and support for sustainable food practices.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-700">
              Our diverse team of experts is passionate about health, nutrition, and technology. We work collaboratively to deliver top-notch services and resources to our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
