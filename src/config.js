// src/Config.js

const API_BASE_URL = 'https://api.escuelajs.co/api/v1';

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  CATEGORIES: `${API_BASE_URL}/categories`,
  PRODUCT_BY_ID: (id) => `${API_BASE_URL}/products/${id}`,
  PRODUCTS_BY_CATEGORY: (categoryId) => `${API_BASE_URL}/categories/${categoryId}/products`,
};
