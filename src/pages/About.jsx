import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-5 fw-bold mb-4">Our Story</h2>
            <p className="lead">
              Founded in 2010, Beach Events Management started with a simple mission: to create unforgettable beach experiences.
            </p>
            <p>
              What began as a small team organizing beach weddings has grown into a full-service beach event management company
              serving clients across California. Our team of passionate event planners, designers, and coordinators work
              tirelessly to bring your vision to life against the stunning backdrop of the Pacific Ocean.
            </p>
          </motion.div>
        </Col>
        <Col lg={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
              fluid
              rounded
              className="shadow"
            />
          </motion.div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4">Why Choose Us?</h3>
              <Row>
                <Col md={4} className="mb-4 mb-md-0">
                  <div className="text-center">
                    <div className="display-4 mb-3">🏖️</div>
                    <h5>Prime Locations</h5>
                    <p className="mb-0">
                      Exclusive access to the most beautiful beaches in California with all necessary permits handled.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4 mb-md-0">
                  <div className="text-center">
                    <div className="display-4 mb-3">✨</div>
                    <h5>Attention to Detail</h5>
                    <p className="mb-0">
                      From setup to cleanup, we handle every detail so you can focus on enjoying your event.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center">
                    <div className="display-4 mb-3">👨‍👩‍👧‍👦</div>
                    <h5>Memorable Experiences</h5>
                    <p className="mb-0">
                      We create unique, personalized experiences that you and your guests will remember forever.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="text-center mb-4">Our Team</h3>
          <Row className="g-4">
            {[
              {
                name: "Jessica Wilson",
                role: "Founder & CEO",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
                bio: "With over 15 years in event planning, Jessica's vision drives our company's success."
              },
              {
                name: "Michael Chen",
                role: "Operations Manager",
                image: "https://randomuser.me/api/portraits/men/42.jpg",
                bio: "Michael ensures every event runs smoothly with military precision."
              },
              {
                name: "Sarah Johnson",
                role: "Lead Designer",
                image: "https://randomuser.me/api/portraits/women/33.jpg",
                bio: "Sarah's creative touch transforms beach spaces into magical settings."
              }
            ].map((member, index) => (
              <Col key={index} md={4}>
                <Card className="h-100 shadow-sm">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    className="card-img-top"
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;