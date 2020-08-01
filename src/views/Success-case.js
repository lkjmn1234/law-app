import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import SimpleCard from '../components/layout/SimpleCard';

const Home = () => {

  return (
    <>
    <Hero className="illustration-section-01" />
      <h3>Success Cases</h3>
      <div className = "card-wrapper">
        <SimpleCard header="Eric Tam & Co." noOfCase="22" content="Very Professional & respectful lawyers - 03.08.2020"></SimpleCard>
      <SimpleCard header="Benjamin Buffalo LLP" noOfCase="13" content="Diligent work - 07.07.2020"></SimpleCard>
      <SimpleCard header="Walter Tsang & Co." noOfCase="100" content="Hong Kong Most famous lawyers - 31.07.2020"></SimpleCard>
   </div>
       </>
  );
}

export default Home;