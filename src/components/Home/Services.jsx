import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Beach Weddings",
    description: "Romantic beach weddings with stunning ocean views and customized setups.",
    icon: "💍",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60"
  },
  {
    title: "Corporate Events",
    description: "Professional beach setups for corporate retreats, team building, and conferences.",
    icon: "💼",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60"
  },
  {
    title: "Birthday Parties",
    description: "Fun and memorable birthday celebrations on the beach with themed decorations.",
    icon: "🎉",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60"
  }
];

const Services = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={4}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-100">
                  <Card.Img variant="top" src={service.image} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body>
                    <div className="display-4 mb-3">{service.icon}</div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;