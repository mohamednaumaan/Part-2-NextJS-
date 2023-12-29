// components/ProductCard.js
import React from 'react';
import styles from '../styles/products.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className="row">
      <div className={styles['productCard']}>
        <div className="col-md-6">
          <div className="row">
            <img src={product.image} alt={product.name} className={styles['productImage']} />
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles['productInfo']}>
            <h2 className={styles['productTitle']}>{product.name}</h2>
            <p className={styles['productDescription']}>Price: {product.price}AED</p>
            <p className={styles['productDescription']}>Price Inclusive of VAT</p>
            <p className={styles['productDescription']}>Product Capacity: {product.capacity}</p>
            <p className={styles['productDescription']}>Warranty: {product.warranty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
