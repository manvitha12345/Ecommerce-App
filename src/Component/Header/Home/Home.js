import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../../config';
import { Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async (categoryId = null) => {
    try {
      let url = API_ENDPOINTS.PRODUCTS;
      if (categoryId) {
        url = API_ENDPOINTS.PRODUCTS_BY_CATEGORY(categoryId);
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched Products:', data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.CATEGORIES);
      const data = await response.json();
      const filteredCategories = data.filter(category =>
        ['Clothes', 'Electronics', 'Shoes', 'Miscellaneous'].includes(category.name)
      );
      setCategories(filteredCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    fetchProducts(categoryId === 'all' ? null : categoryId);
  };

  return (
    <div className="home">
      <div className="dropdown">
        <button className="dropdown-button" onClick={() => handleCategoryChange('all')}>
          All Categories
        </button>
        <div className="dropdown-content">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
