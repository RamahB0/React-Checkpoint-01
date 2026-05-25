import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import ProductImage from './components/Image';

const firstName = "Ramah";

function App() {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 className="text-center mb-5" style={{ color: '#343a40', fontWeight: 'bold' }}>
        Product Showcase
      </h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card className="shadow-lg border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <ProductImage />
            <Card.Body className="p-4">
              <Name />
              <Price />
              <hr />
              <Description />
            </Card.Body>
          </Card>

          <div className="mt-4 text-center p-4 rounded" style={{ backgroundColor: '#e3f2fd', borderRadius: '10px' }}>
            {firstName ? (
              <div>
                <p className="h4 text-primary fw-bold">
                  Hello, {firstName}!
                </p>
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop"
                  alt="Welcome"
                  className="mt-3 rounded-circle shadow"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </div>
            ) : (
              <p className="h4 text-secondary">Hello, there!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
