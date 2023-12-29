import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Luminous GPTTEX 240 AH',
      image: '/images/pic1.jpg',
      price: 49.99,
      capacity: '35AH',
      warranty: '3yrs',
    },
    {
      id: 2,
      name: '24v Deep Cycle Battery',
      image: '/images/pic2.jpg',
      price: 69.99,
      capacity: '35AH',
      warranty: '3yrs',
    },
    {
      id: 3,
      name: '60Ah 12v Battery',
      image: '/images/pic3.jpg',
      price: 54.99,
      capacity: '35AH',
      warranty: '3yrs',
    },
    {
      id: 4,
      name: '120Ah 24v Battery',
      image: '/images/pic4.jpg',
      price: 99.99,
      capacity: '35AH',
      warranty: '3yrs',
    },
    {
      id: 5,
      name: '50Ah 12v Battery',
      image: '/images/pic5.jpg',
      price: 42.99,
      capacity: '35AH',
      warranty: '3yrs',
    },
    {
      id: 6,
      name: '100Ah 24v Battery',
      image: '/images/pic6.jpg',
      price: 79.99,
      capacity: '35AH',
      warranty: '3yrs',
    },
  ];

  return (
    <div>
      <h1>Batteries</h1>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;