import React, { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message') {
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount > 100) {
        setError('Message cannot exceed 100 words.');
        return;
      } else {
        setError('');
      }
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      console.log('Form submitted:', formData);
      
    }
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
        alert('Please fill out all fields.');
        return;
      }
      alert('Form submitted successfully');
  
  };

  return (
    <div className="form-container w-full mt-20" >
      <form onSubmit={handleSubmit} className="contact-form">
       
       <div className='flex  gap-2'>

       <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            autoComplete='off'
            
          />
        
        
     
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            autoComplete='off'
           
          />
       </div>
          
      
        
       
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            autoComplete='off'
            
          />
     
        
      
          <textarea
          autoComplete='off'
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type Your Message (max 100 words)"
            rows="5"
            required
          
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}

        
        <button type="submit" className="submit-button" style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
