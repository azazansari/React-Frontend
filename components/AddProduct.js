import React, { useState } from 'react';
import api from '../services/api';

function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/products', form);
      alert('Product Added Successfully');

      setForm({
        name: '',
        price: '',
        description: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;