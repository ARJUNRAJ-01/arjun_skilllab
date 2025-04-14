import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section py-5">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold mb-4">Unforgettable Beach Events</h1>
              <p className="lead mb-4">
                Create magical moments with our professional beach event management services. 
                From weddings to corporate retreats, we make your beach dreams come true.
              </p>
              <div className="d-flex gap-3">
                <Button as={Link} to="/events" variant="primary" size="lg">
                  Explore Events
                </Button>
                <Button as={Link} to="/contact" variant="outline-primary" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Beach Event" 
                className="img-fluid rounded shadow-lg" 
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;