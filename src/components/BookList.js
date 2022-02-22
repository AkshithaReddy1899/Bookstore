import { React } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import NoBooks from './NoBooks';

const BookList = () => {
  const books = useSelector((state) => state);
  const booksArray = books.booksReducer;
  return (
    <div>
      <ul className="book-list-container">
        {
        booksArray.length ? booksArray.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        )) : <NoBooks />
        }
      </ul>
    </div>
  );
};

export default BookList;
