/* eslint-disable camelcase */

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const categories = ['Fiction', 'Fantasy', 'Action & Adventure', 'Mystery', 'Horror', 'Thriller', 'Biography', 'History', 'Miscellaneous'];

  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    category: '',
  });

  const handleChangeName = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangecat = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitBookToStore = () => {
    const item_id = uuidv4();
    const { title, category } = state;
    const newBook = {
      item_id,
      title,
      category,
    };
    dispatch(addBook(newBook));
    setState(() => ({
      title: '',
      category: '',
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitBookToStore();
        }}
        className="d-flex justify-content-between"
      >
        <div className="mb-3">
          <input type="text" className="form-control" name="title" value={state.title} onChange={handleChangeName} placeholder="Book title" required />
        </div>
        <div className="mb-3">
          <select className="form-select" name="category" value={state.category} onChange={handleChangecat} required>
            <option value="DEFAULT">category</option>
            {categories.map((cat) => (
              <option key={uuidv4()}>{cat}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
