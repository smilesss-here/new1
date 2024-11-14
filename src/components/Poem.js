import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Poem.css';

function Poem() {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="poem">
      <h2>Why You???</h2>
      
      {/* Image added right after the heading */}
      <img 
        src="https://i.pinimg.com/736x/60/67/10/6067108133eac281f37aa44aedee1b66.jpg" 
        alt="Intro Image" 
        className="intro-image" 
      />

      <p className="poem-text">
        Hn toh start krte h apke bde hath jo ki muje sbse jda psnd h ....😭...Literally i am in love with them...🥹❤️<br />
        secondly apki bo deep voice....itni attractive kese ho skti h ....😭<br />
        or apke efforts.... sch m ...m itna desrve nhi krti....🥲<br />
        apki caring side ...🥹❤️<br />
      </p>
      <p className="dedication">
        yr..ap m bo hr reason h ki m apke sth rahu... 💖
      </p>

      <div className="button-container">
        <button onClick={handleShowImage}>
          {showImage ? "Hide Picture" : "Show Picture"}
        </button>
        <button onClick={() => navigate('/quiz')}>Next</button>
      </div>

      {showImage && (
        <img
          src="/path-to-image/his-picture.jpg"
          alt="His Pic"
          className="displayed-image"
        />
      )}
    </div>
  );
}

export default Poem;
