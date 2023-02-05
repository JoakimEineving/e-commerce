import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [description, setDescription] = useState('');
    const [products, setProducts] = useState([]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:3000/products/upload', {
          title,
          price,
          thumbnail,
          description
        });
        setProducts([...products, res.data]);
        setTitle('');
        setPrice('');
        setThumbnail('');
        setDescription('');
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
          <input
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  };
  
  export default UploadForm;