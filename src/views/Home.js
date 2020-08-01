import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import HomeSearch from '../components/sections/HomeSearch';
import MediaCard from '../components/layout/MediaCard';
import { ButtonGroup, Button } from '@material-ui/core';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <HomeSearch />
      <div className="container" style={{ textAlign: "center" }}>
        <h8>"Find Lawyers" is the first platform that provides a standardized and streamlined experience for anyone seeking legal services in Hong Kong</h8>
        <div className="card-wrapper" style={{ marginTop: '30px', marginBottom: '40px' }}>
          <MediaCard path="/informative.JPG" header="Informative" content="Data base of all the law firms in Hong Kong, complete with detailled info such as year of establishment, available language, etc."></MediaCard>
          <MediaCard path="/interactive.JPG" header="Interactive" content="Built-in communication tools to help you communicate with your legal advisers quickly and safely."></MediaCard>
          <MediaCard path="/intelligent.JPG" header="Intelligent" content="Recommending the best law firm for you, powered by AL and Data analytics."></MediaCard>
        </div>
        <ButtonGroup style={{ marginBottom: '20px' }}>
          <Button>Listing by Lawyers</Button>
          <Button>FAQ</Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default Home;