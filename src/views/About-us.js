import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import CustomAatar from '../components/layout/CustomAvatar';
import MixCard from '../components/layout/MixCard';

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <h3>About Us</h3>
        <MixCard></MixCard>
      <h3>Founders</h3>
      <div className="container card-wrapper">
        <CustomAatar name="Calvin Gan"></CustomAatar>
        <CustomAatar name="Walter Tsang"></CustomAatar>
        <CustomAatar name="Louis Chan"></CustomAatar>
      </div>
    </>
  );
}

export default Home;