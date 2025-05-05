import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../features/booksSlice';
import { useNavigate } from 'react-router-dom';
import './AddBook.css'

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(form));
    navigate('/browse');
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="author" placeholder="Author" onChange={handleChange} required />
        <input name="category" placeholder="Category" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input name="rating" type="number" step="0.1" min="0" max="5" placeholder="Rating" onChange={handleChange} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
