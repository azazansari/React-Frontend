import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get('/products');
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product._id}>
          <h3>
  <Link to={`/product/${product._id}`}>
    {product.name}
  </Link>
</h3>
          <p>Price: ₹{product.price}</p>
          <p>{product.description}</p>

          <button onClick={() => deleteProduct(product._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductList;