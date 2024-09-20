import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import confetti from 'canvas-confetti';

const ParallaxEndSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const styles = {
    backgroundColor: 'rgba(30, 55, 34, 0.5)', // 50% opacity
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically (if needed)
  };

  const ButtonStyle = {
    backgroundColor: '#ffffff',
    color: '#2e5637',
    borderRadius: '20px',
    padding: '4px 12px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '140px',
    fontWeight: '600',
  };

  const handleButtonClick = () => {
    
    navigate('/login'); // Redirect to the Login page
  };

  const launchFlowerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 },
      shapes: ['circle'],
      colors: ['#90EE90'],
    });
  };

  return (
    <div>
      <div className="membership-modal flex justify-center items-center">
        <div className='w-[85%] md:w-[50%] lg:w-[40%] h-auto flex flex-col rounded-2xl shadow-lg' style={styles}>
          <h4 className='Text text-center pb-6 pt-8' id='sideHeadingMember' style={{ color: 'white' }}>Join our Green Community!</h4>
          <h2 className='Text text-center px-14 pb-10' id='subHeadingMember' style={{ color: 'white' }}>Become a member and enjoy 10% off on your first purchase</h2>
          <button style={ButtonStyle} onClick={handleButtonClick} onMouseEnter={()=>{launchFlowerConfetti();}}>Signup now</button>
          <img className='opacity-50' src='./assets/Groupsvg.svg' alt='memberleafs' />
        </div>
      </div>
    </div>
  );
};

export default ParallaxEndSection;
