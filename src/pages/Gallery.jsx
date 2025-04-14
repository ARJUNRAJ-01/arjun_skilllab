import React from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import ImageGallery from '../components/Common/ImageGallery';

const galleryCategories = [
  {
    name: 'Weddings',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1519671482749-fd09be917c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1516589091380-5d9e05bcd9a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60'
    ]
  },
  {
    name: 'Corporate',
    images: [
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60'
    ]
  },
  {
    name: 'Celebrations',
    images: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1519671482749-fd09be917c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1516589091380-5d9e05bcd9a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60'
    ]
  }
];

const Gallery = () => {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="display-5 fw-bold">Our Gallery</h2>
          <p className="lead">Explore moments we've created for our clients</p>
        </Col>
      </Row>

      <Tabs defaultActiveKey="weddings" id="gallery-tabs" className="mb-4 justify-content-center">
        {galleryCategories.map((category, index) => (
          <Tab key={index} eventKey={category.name.toLowerCase()} title={category.name}>
            <ImageGallery images={category.images} />
          </Tab>
        ))}
      </Tabs>

      <Row className="mt-5">
        <Col className="text-center">
          <div className="p-4 bg-light rounded-3">
            <h3 className="mb-3">Want to see more?</h3>
            <p className="mb-4">
              Follow us on Instagram to see our latest events and behind-the-scenes moments.
            </p>
            <button className="btn btn-primary">
              Follow @BeachEvents
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;