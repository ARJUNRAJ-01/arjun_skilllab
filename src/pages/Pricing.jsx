import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

const pricingPlans = [
  {
    name: "Basic",
    price: "$1,200",
    description: "Perfect for small gatherings and intimate events",
    features: [
      "Beach setup for up to 30 guests",
      "Basic decor package",
      "4-hour event duration",
      "1 event coordinator",
      "Standard cleanup"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "$2,500",
    description: "Our most popular package for medium-sized events",
    features: [
      "Beach setup for up to 75 guests",
      "Enhanced decor package",
      "6-hour event duration",
      "2 event coordinators",
      "Premium cleanup",
      "Basic sound system"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "$4,800",
    description: "Comprehensive package for large, elaborate events",
    features: [
      "Beach setup for up to 150 guests",
      "Custom decor package",
      "8-hour event duration",
      "Dedicated event team",
      "Full cleanup service",
      "Premium sound system",
      "Vendor coordination",
      "Custom lighting"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="display-5 fw-bold">Pricing Plans</h2>
          <p className="lead">Simple, transparent pricing for your beach event</p>
        </Col>
      </Row>

      <Row className="g-4">
        {pricingPlans.map((plan, index) => (
          <Col key={index} lg={4} md={6}>
            <Card className={`h-100 shadow-sm ${plan.popular ? 'border-primary border-2' : ''}`}>
              {plan.popular && (
                <div className="position-absolute top-0 start-50 translate-middle mt-3">
                  <Badge bg="primary" pill>Most Popular</Badge>
                </div>
              )}
              <Card.Body className="text-center">
                <Card.Title as="h3" className="mb-3">
                  {plan.name}
                </Card.Title>
                <div className="display-4 fw-bold mb-3">{plan.price}</div>
                <p className="text-muted mb-4">{plan.description}</p>
                
                <ListGroup variant="flush" className="mb-4">
                  {plan.features.map((feature, featureIndex) => (
                    <ListGroup.Item key={featureIndex}>{feature}</ListGroup.Item>
                  ))}
                </ListGroup>
                
                <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-primary'} w-100`}>
                  Choose Plan
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col className="text-center">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h3 className="mb-3">Custom Packages</h3>
              <p className="mb-4">
                Need something different? We offer completely customized packages tailored to your
                specific needs and budget. Contact us to discuss your vision.
              </p>
              <button className="btn btn-primary">
                Request Custom Quote
              </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pricing;