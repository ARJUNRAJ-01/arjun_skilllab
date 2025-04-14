import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { GeoAlt, Telephone, Envelope, Clock } from 'react-bootstrap-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Simulate form submission
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="display-5 fw-bold">Contact Us</h2>
          <p className="lead">Get in touch to start planning your beach event</p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col lg={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="p-4">
              <h3 className="mb-4">Send us a message</h3>
              
              {submitted && (
                <Alert variant="success" className="mb-4">
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}
              
              {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Your Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="p-4">
              <h3 className="mb-4">Contact Information</h3>
              
              <div className="mb-4">
                <h5 className="mb-3">Office Address</h5>
                <div className="d-flex align-items-start mb-2">
                  <GeoAlt className="me-3 mt-1" size={20} />
                  <div>
                    123 Beachfront Avenue<br />
                    Malibu, CA 90265<br />
                    United States
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="mb-3">Contact Details</h5>
                <div className="d-flex align-items-start mb-2">
                  <Telephone className="me-3 mt-1" size={20} />
                  <div>+1 (555) 123-4567</div>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <Envelope className="me-3 mt-1" size={20} />
                  <div>info@beachevents.com</div>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="mb-3">Business Hours</h5>
                <div className="d-flex align-items-start">
                  <Clock className="me-3 mt-1" size={20} />
                  <div>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="mb-3">Follow Us</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="text-decoration-none">
                    <i className="bi bi-facebook fs-4"></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i className="bi bi-twitter fs-4"></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i className="bi bi-instagram fs-4"></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i className="bi bi-pinterest fs-4"></i>
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;