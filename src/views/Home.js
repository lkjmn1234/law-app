import React from 'react';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Home = () => {

  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">
      </main>
      <Footer />
    </>
  );
}

export default Home;