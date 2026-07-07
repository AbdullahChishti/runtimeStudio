import React from 'react';
import ContactForm from '../../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-8">
        We'd love to hear from you! Please fill out the form below to get in touch with us.
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
