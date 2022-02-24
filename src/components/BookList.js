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
  console.log(books);
  console.log('HI');
  return (
    <div>
      <ul className="book-list-container">
        sfdfg
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

/*  {
          books.map((book) => console.log(book))
        }
        {
          books.length ? books.map((book) => (
            <Book
              key={book.item_id}
              book={book}
            />
          )) : <NoBooks />
        }
        */

/* booksArray.length ? booksArray.map((book) => (
            <Book
              key={book.item_id}
              book={book}
            />
          )) : <NoBooks /> */

export default BookList;
