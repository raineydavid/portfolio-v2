import React from 'react';
import pikachu from '../images/Pikachu225.jpg';

function Home() {
  return (
    <div className="block container">
      <div className="center">
        <img src={pikachu} alt="profile" className="profile-pic"/>
        <h1>Hey, I'm Phuc!</h1>
        <h5>Full Stack Dev | Junior Developer | Unsatisfied Curiosity</h5>
      </div>
    </div>
  )
}

export default Home