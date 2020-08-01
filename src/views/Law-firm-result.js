import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import HomeSearch from '../components/sections/HomeSearch';
import CardTable from '../components/layout/CardTable';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <div className="container-sm">
        <CardTable></CardTable>
      </div>
    </>
  );
}

export default Home;