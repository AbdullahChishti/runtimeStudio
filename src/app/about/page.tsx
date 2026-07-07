import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our company! We are dedicated to providing innovative solutions and exceptional services to our clients.
        Our mission is to empower businesses and individuals through technology and creative strategies.
      </p>
      <p className="text-lg mb-4">
        Founded in [Year], we have grown into a team of passionate experts committed to excellence, integrity, and customer satisfaction.
        We believe in fostering a collaborative environment where ideas flourish and challenges are met with enthusiasm.
      </p>
      <h2 className="text-3xl font-bold mt-8 mb-4">Our Vision</h2>
      <p className="text-lg mb-4">
        To be a leading force in the industry, continuously pushing the boundaries of what's possible and setting new standards for quality and innovation.
      </p>
      <h2 className="text-3xl font-bold mt-8 mb-4">Our Values</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Innovation: Embracing new ideas and technologies to drive progress.</li>
        <li>Integrity: Upholding the highest ethical standards in all our endeavors.</li>
        <li>Excellence: Striving for superior quality in every project and interaction.</li>
        <li>Collaboration: Working together to achieve common goals and foster a supportive community.</li>
        <li>Customer Focus: Prioritizing the needs and success of our clients.</li>
      </ul>
      <p className="text-lg">
        Thank you for your interest in our company. We look forward to connecting with you and exploring how we can help you achieve your goals.
      </p>
    </div>
  );
};

export default AboutPage;
