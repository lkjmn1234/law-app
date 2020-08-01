import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import HomeSearch from '../components/sections/HomeSearch';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <HomeSearch />
    </>
  );
}

export default Home;