import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '../../../config'; 
import './ProductDetail.css'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_ENDPOINTS.PRODUCTS}/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductDetail;
