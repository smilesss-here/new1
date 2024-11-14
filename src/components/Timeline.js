import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Timeline.css'

const milestones = [
  {
    date: "The Moment When My Fingers Touched Your Hand",
    description: "Unforgettable moment of my life or sch m us time itne butterflies aaye the na 🥹.....bhot alg si feeling thi..... pr bhot hi jda acha tha....❤️",
    image: "/images/m1.jpeg",
  },
  {
    date: "The Moment You Held My Hand in Front of Everyone",
    description: "Apko pta h kitna pyara moment tha bo jb apne chlte time mera hath pkda tha.... mtlb muje pta h apke liy b tough hoga .... pr sch m bhot pyara moment tha....World's safest feeling....✨",
    image: "/images/m2.jpeg"
  },
  {
    date: "The Moment I Was in Your Arms",
    description: "World's safest place...ek asa moment jb merko apke or mere alawa kuch pta hi nhi tha....sb kuch bilkul perfect....bilkul together forever wli feeling...🥹❤️",
    image: "/images/m3.jpeg"
  },
  {
    date: "Thank You for All the Respect and Efforts",
    description: "Thank you so muchhh itne caring hone k liy....countless efforts k liy ....itna special feel krne k liy....or for everything ✨🫶🏻....",
    image: "/images/m4.jpeg"
  },
];

function Timeline() {
  const navigate = useNavigate();

  return (
    <div className="timeline">
      <h2>Uss Together</h2>
      <div className="timeline-items">
        {milestones.map((milestone, index) => (
          <div className="timeline-item" key={index}>
            <img src={milestone.image} alt={milestone.date} />
            <h3>{milestone.date}</h3>
            <p>{milestone.description}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/poem')}>Okay, cutie click for next</button>
    </div>
  );
}

export default Timeline;
