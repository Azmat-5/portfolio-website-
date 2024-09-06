import React from 'react';
import './Home.css';
import aa from '../../assets/aa.jpg';

const Home = () => {
  return (
    <section className="home">
      <div className="parent">
        <div className="child">
          <h1>Welcome to My Portfolio</h1>
          <p>Front-End Developer specializing in React, JavaScript, and Responsive Design.</p>
        </div>
        <img src={aa} alt="Portfolio" />
      </div>
    </section>
  );
};

export default Home;
