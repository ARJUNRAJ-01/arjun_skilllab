import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/Booking/BookingForm';
import BookingList from '../components/Booking/BookingList';
import { CalendarEvent } from 'react-bootstrap-icons';

const Bookings = ({ isLoggedIn }) => {
  const [bookings, setBookings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    // Load sample bookings for demo
    const sampleBookings = [
      {
        id: 1,
        eventType: 'Wedding',
        location: 'Malibu Beach',
        date: new Date(Date.now() + 86400000 * 7).toISOString(), // 7 days from now
        guests: 80,
        specialRequests: 'We need a white aisle runner and floral arch',
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        phone: '555-123-4567'
      },
      {
        id: 2,
        eventType: 'Birthday Party',
        location: 'Santa Monica Beach',
        date: new Date(Date.now() + 86400000 * 14).toISOString(), // 14 days from now
        guests: 30,
        specialRequests: '',
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        phone: '555-123-4567'
      }
    ];
    
    setBookings(sampleBookings);
  }, [isLoggedIn, navigate]);

  const handleSubmit = (bookingData) => {
    try {
      if (currentBooking) {
        // Update existing booking
        setBookings(prev => prev.map(b => 
          b.id === currentBooking.id ? { ...bookingData, id: currentBooking.id } : b
        ));
      } else {
        // Add new booking
        const newBooking = {
          ...bookingData,
          id: Date.now()
        };
        setBookings(prev => [...prev, newBooking]);
      }
      
      setShowForm(false);
      setCurrentBooking(null);
    } catch (err) {
      setError(err.message || 'Failed to save booking');
    }
  };

  const handleEdit = (booking) => {
    setCurrentBooking(booking);
    setShowForm(true);
  };

  const handleDelete = (booking) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      setBookings(prev => prev.filter(b => b.id !== booking.id));
    }
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="d-flex align-items-center">
            <CalendarEvent className="me-2" size={28} />
            My Bookings
          </h2>
        </Col>
        <Col className="text-end">
          <Button 
            variant="primary" 
            onClick={() => {
              setCurrentBooking(null);
              setShowForm(true);
            }}
          >
            New Booking
          </Button>
        </Col>
      </Row>
      
      {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
      
      {showForm ? (
        <BookingForm 
          onSubmit={handleSubmit} 
          initialData={currentBooking || undefined} 
          onCancel={() => {
            setShowForm(false);
            setCurrentBooking(null);
          }}
        />
      ) : (
        <BookingList 
          bookings={bookings} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      )}
    </Container>
  );
};

export default Bookings;