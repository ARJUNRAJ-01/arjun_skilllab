import React from 'react';
import { Card, Button, Badge, ListGroup, Row, Col } from 'react-bootstrap';
import { CalendarEvent, GeoAlt, People, Trash, Pencil } from 'react-bootstrap-icons';

const BookingList = ({ bookings, onEdit, onDelete }) => {
  const getStatusBadge = (date) => {
    const eventDate = new Date(date);
    const today = new Date();
    
    if (eventDate < today) {
      return <Badge bg="secondary">Completed</Badge>;
    } else if ((eventDate - today) / (1000 * 60 * 60 * 24) <= 7) {
      return <Badge bg="warning" text="dark">Upcoming</Badge>;
    } else {
      return <Badge bg="success">Confirmed</Badge>;
    }
  };

  return (
    <div className="booking-list">
      {bookings.length === 0 ? (
        <Card className="text-center py-4">
          <Card.Body>
            <h5>No bookings yet</h5>
            <p className="text-muted">Create your first beach event booking</p>
          </Card.Body>
        </Card>
      ) : (
        <ListGroup variant="flush">
          {bookings.map((booking, index) => (
            <ListGroup.Item key={index} className="py-3 px-0">
              <Card>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={8}>
                      <div className="d-flex align-items-center mb-2">
                        <h5 className="mb-0 me-2">{booking.eventType}</h5>
                        {getStatusBadge(booking.date)}
                      </div>
                      
                      <div className="d-flex flex-wrap text-muted mb-2">
                        <div className="me-3">
                          <CalendarEvent className="me-1" />
                          {new Date(booking.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="me-3">
                          <GeoAlt className="me-1" />
                          {booking.location}
                        </div>
                        <div>
                          <People className="me-1" />
                          {booking.guests} guests
                        </div>
                      </div>
                      
                      {booking.specialRequests && (
                        <p className="mb-0">
                          <small>Notes: {booking.specialRequests}</small>
                        </p>
                      )}
                    </Col>
                    
                    <Col md={4} className="text-md-end mt-3 mt-md-0">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => onEdit(booking)}
                      >
                        <Pencil /> Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => onDelete(booking)}
                      >
                        <Trash /> Delete
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default BookingList;