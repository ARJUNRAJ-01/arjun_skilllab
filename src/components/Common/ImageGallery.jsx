import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ImageGallery = ({ images }) => {
  return (
    <Row className="g-4">
      {images.map((img, index) => (
        <Col key={index} xs={6} md={4} lg={3}>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image 
              src={img} 
              fluid 
              rounded 
              className="shadow-sm gallery-image"
              style={{ height: '200px', width: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default ImageGallery;