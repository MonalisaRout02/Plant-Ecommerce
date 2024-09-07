import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState(true);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful', data);
        // Save token and user info in localStorage or state
        localStorage.setItem('token', data.encodedToken);
      } else {
        console.error('Login failed:', data.errors);
        alert(data.errors.join('\n'));
      }
      navigate("/home");
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='loginContainer flex justify-center items-center'
      style={{
        width: '100%',
        background: 'linear-gradient(to bottom, #1E3822, #498052)',
        height: '100vh'
      }}>
      <div className='flex flex-row w-[70%] h-[80%] rounded-lg bg-white justify-center'>
        <img className="w-1/2"
          style={{
            objectFit: 'cover',
            borderTopLeftRadius: '0.5rem',
            borderBottomLeftRadius: '0.5rem',
          }}
          src="/assets/Login.png" alt="login" />
        <div className='flex flex-col w-1/2 p-12 '>
          {isLogIn ? <h2 className='Text mb-5' id='subHeading'>Login</h2> :
            <h2 className='Text mb-5' id='subHeading'>SignUp</h2>
          }

          {isLogIn ? (
            <form className='login-form flex flex-col gap-2' onSubmit={handleSubmit}>
              <div>
                <label className='BodyText'>Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                  autoComplete='off'
                />
              </div>
              <div>
                <label className='BodyText'>Password</label>
                <input
                  type="text"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                  autoComplete='off'
                />
              </div>
              <div className='flex justify-center mt-10'>
                <button type="submit" className="submit-button" style={{ width: '160px', padding: '10px 20px' }}>
                  Login
                </button>
              </div>
              <p className='BodyText text-center mt-20 BodyText'>Don't have an account?
                <button onClick={() => { setIsLogIn(false) }}><u>Signup</u></button>
              </p>
            </form>
          ) : (
            <div>
              <SignUpForm />
              <p className='BodyText text-center mt-10 BodyText'>Already have an account?
                <button onClick={() => { setIsLogIn(true) }}><u>Login</u></button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
