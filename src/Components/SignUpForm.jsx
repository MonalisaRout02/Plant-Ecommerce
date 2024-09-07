import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed and imported for making HTTP requests
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Make a POST request to the sign-up API endpoint
      const response = await axios.post('/api/auth/signup', {
        firstName: signUpData.name,
        lastName: signUpData.name,
        email: signUpData.email,
        password: signUpData.password
      });

      // Save the JWT token in localStorage
      localStorage.setItem('token', response.data.encodedToken);
      console.log('Response:', response);
      console.log('Token:', response.data.encodedToken);
      console.log('Sign-up successful!');
      // Redirect or show a success message as needed
      navigate('/home');


    } catch (error) {
      console.error('Sign-up failed:', error);
      alert('Sign-up failed, please try again.');
    }
  };

  return (
    <div>
      <form className='login-form flex flex-col gap-2' onSubmit={handleSubmit}>
        <div>
          <label className='BodyText'>Name</label>
          <input
            type="text"
            name="name"
            value={signUpData.name}
            onChange={handleChange}
            required
            autoComplete='off'
          />
        </div>
        
        <div>
          <label className='BodyText'>Email Address</label>
          <input
            type="email" 
            name="email"
            value={signUpData.email}
            onChange={handleChange}
            required
            autoComplete='off'
          />
        </div>
        
        <div>
          <label className='BodyText'>Password</label>
          <input
            type="password" 
            name="password"
            value={signUpData.password}
            onChange={handleChange}
            required
            autoComplete='off'
          />
        </div>

        <div className='flex justify-center mt-10'>
          <button type="submit" className="submit-button" style={{ width: '160px', padding: '10px 20px' }}>
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
