import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import ProfileCard from '../components/layout/ProfileCard';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <div className="container">
          <h3>Firm A</h3>
      </div>
      <div className="container">
        <ProfileCard></ProfileCard>
      </div>
    </>
  );
}

export default Home;