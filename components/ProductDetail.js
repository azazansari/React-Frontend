import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>Product Details</h2>

      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;