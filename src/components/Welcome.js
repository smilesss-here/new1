import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';  // Ensure this is correctly linked

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="title">Warmest Welcome to My Personal Pookie</h1>
        <p className="subtitle">Let's Explore the Beautiful Moments We've Shared, Together 💖</p>

        {/* Heart animation */}
        <div className="heart-animation">
          <span role="img" aria-label="heart">💖</span>
          <span role="img" aria-label="heart">💌</span>
          <span role="img" aria-label="heart">💘</span>
        </div>

        {/* Intro Text */}
        <p className="intro-text">
          Chlo starting se start krte h..... first text se leke saare cute moments k......
          Or hmesa ki trh y flowers apke k liy....
        </p>

        {/* Cute Image */}
        <img
          src="https://i.pinimg.com/736x/34/c9/2c/34c92c7114a2d3b6651659f2b61cca7e.jpg"
          alt="Cute moments"
          className="cute-image"
        />

        <p className="encouragement">❤️🎀❤️</p>

        <button className="next-button" onClick={() => navigate('/timeline')}>
          🌟 Okay, So Ready for the Next Slide? 🌟
        </button>
      </div>
    </div>
  );
}

export default Welcome;
