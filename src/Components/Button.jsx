import React from 'react';
import './Button.css'; // Import the CSS file

const Button = ({ text }) => {
  return (
    <div>
      <button className="button">
        {text}
      </button>
    </div>
  );
}

export default Button;

