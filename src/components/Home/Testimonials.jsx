import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';

const testimonials = [
  {
    name: "Sarah & Michael",
    role: "Wedding Couple",
    text: "Our beach wedding was absolutely perfect thanks to the amazing team. They handled everything from setup to cleanup, allowing us to just enjoy our special day.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "TechCorp Inc.",
    role: "Corporate Client",
    text: "The annual retreat organized by Beach Events was our best one yet. The beach setup for our conference was both professional and relaxing.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "The Johnson Family",
    role: "Birthday Celebration",
    text: "Our daughter's 16th birthday on the beach was magical. The themed decorations and activities made it an unforgettable experience.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <Carousel indicators={false} interval={5000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Card className="border-0 bg-transparent">
                <Card.Body className="text-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="rounded-circle mb-4" 
                    width="100" 
                    height="100"
                  />
                  <blockquote className="blockquote mb-4">
                    <p className="lead">"{testimonial.text}"</p>
                  </blockquote>
                  <footer className="blockquote-footer">
                    <strong>{testimonial.name}</strong>, {testimonial.role}
                  </footer>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;