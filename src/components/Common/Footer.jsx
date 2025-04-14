import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Beach Events</h5>
            <p>Creating unforgettable beach experiences since 2010. We specialize in beach weddings, parties, and corporate events.</p>
            <div className="social-icons">
              <a href="#" className="me-2"><Facebook size={20} /></a>
              <a href="#" className="me-2"><Twitter size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
            </div>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><Envelope className="me-2" /> info@beachevents.com</li>
              <li><Telephone className="me-2" /> +1 (555) 123-4567</li>
              <li><GeoAlt className="me-2" /> 123 Beachfront Ave, Malibu, CA</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Newsletter</h5>
            <p>Subscribe to get updates on our latest events and offers.</p>
            <div className="d-flex">
              <input type="email" className="form-control" placeholder="Your email" />
              <button className="btn btn-primary ms-2">Subscribe</button>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Beach Events Management. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;