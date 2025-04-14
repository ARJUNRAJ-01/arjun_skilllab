import React from 'react';
import { Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { motion } from 'framer-motion';

const eventCategories = [
  {
    title: "Weddings",
    events: [
      {
        title: "Sunset Beach Wedding",
        description: "Romantic ceremony as the sun sets over the ocean",
        price: "$3,500+",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60"
      },
      {
        title: "Intimate Elopement Package",
        description: "Perfect for couples wanting a simple, private ceremony",
        price: "$1,800+",
        image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60"
      }
    ]
  },
  {
    title: "Corporate",
    events: [
      {
        title: "Team Building Retreat",
        description: "Fun activities to strengthen your team bonds",
        price: "$2,500+",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60"
      },
      {
        title: "Beachside Conference",
        description: "Professional meeting space with ocean views",
        price: "$4,000+",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60"
      }
    ]
  },
  {
    title: "Celebrations",
    events: [
      {
        title: "Birthday Bash",
        description: "Celebrate your special day with ocean breezes",
        price: "$1,200+",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60"
      },
      {
        title: "Anniversary Celebration",
        description: "Renew your vows or celebrate years together",
        price: "$2,800+",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60"
      }
    ]
  }
];

const Events = () => {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="display-5 fw-bold mb-3">Our Event Offerings</h2>
          <p className="lead">
            From intimate gatherings to large celebrations, we create memorable beach experiences
          </p>
        </Col>
      </Row>

      <Tabs defaultActiveKey="weddings" id="event-tabs" className="mb-4 justify-content-center">
        {eventCategories.map((category, index) => (
          <Tab key={index} eventKey={category.title.toLowerCase()} title={category.title}>
            <Row className="g-4 mt-3">
              {category.events.map((event, eventIndex) => (
                <Col key={eventIndex} md={6}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-100">
                      <div style={{ height: '200px', overflow: 'hidden' }}>
                        <Card.Img 
                          variant="top" 
                          src={event.image} 
                          style={{ objectFit: 'cover', height: '100%', width: '100%' }} 
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>{event.description}</Card.Text>
                      </Card.Body>
                      <Card.Footer className="bg-transparent border-top-0">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-primary fw-bold">{event.price}</span>
                          <button className="btn btn-sm btn-outline-primary">
                            Book Now
                          </button>
                        </div>
                      </Card.Footer>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Tab>
        ))}
      </Tabs>

      <Row className="mt-5">
        <Col className="text-center">
          <div className="p-4 bg-light rounded-3">
            <h3 className="mb-3">Custom Event Packages</h3>
            <p className="mb-4">
              Don't see exactly what you're looking for? We specialize in creating custom beach event experiences
              tailored to your specific needs and vision.
            </p>
            <button className="btn btn-primary btn-lg">
              Request Custom Package
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Events;