import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Container>
        <Services />
      </Container>
      <Testimonials />
    </div>
  );
};

export default Home;