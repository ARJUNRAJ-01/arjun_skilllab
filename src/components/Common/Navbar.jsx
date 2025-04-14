import React from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  Person, CalendarEvent, BoxArrowRight } from 'react-bootstrap-icons';
import ThemeToggle from './ThemeToggle';

const CustomNavbar = ({ isLoggedIn, onLogout, toggleTheme, theme }) => {
  return (
    <Navbar expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Image 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=60" 
            roundedCircle 
            width="40" 
            height="40" 
            className="me-2"
            alt="Beach Logo"
          />
          <span className="fw-bold">Beach Events</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            {isLoggedIn && <Nav.Link as={Link} to="/bookings">My Bookings</Nav.Link>}
          </Nav>
          <Nav>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            {isLoggedIn ? (
              <>
                <Button variant="outline-primary" className="ms-2" onClick={onLogout}>
                  <BoxArrowRight className="me-1" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-primary" className="ms-2">
                  <Person className="me-1" /> Login
                </Button>
                <Button as={Link} to="/register" variant="primary" className="ms-2">
                  <CalendarEvent className="me-1" /> Register
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;