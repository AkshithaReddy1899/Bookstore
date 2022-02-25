import React from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Books = () => (
  <div className="main-container">
    <BookList />
    <hr />
    <AddBook />
  </div>
);

export default Books;
