import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import NoBooks from './NoBooks';
import { fetchBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <ul className="book-list-container">
        {
          books.length ? books.map((book) => (
            <Book
              key={book.item_id}
              book={book}
            />
          )) : <NoBooks />
        }
      </ul>
    </div>
  );
};

export default BookList;
