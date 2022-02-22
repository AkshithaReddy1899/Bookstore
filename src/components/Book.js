import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    book,
    author,
    percent,
    chapter,
  } = props;
  const {
    id,
    title,
    category,
  } = book;

  return (
    <li className="book-list" key={id}>
      <div>
        <small><b className="category">{category}</b></small>
        <h6 className="title">{title}</h6>
        <small className="author">{author}</small>
        <div>
          <button type="button" className="list-btn">Comments</button>
          <button type="button" className="list-btn" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button" className="list-btn">Edit</button>
        </div>
      </div>
      <div>
        <span className="circle" />
        <div>
          <h4 className="percentage">
            {percent}
            %
          </h4>
          <small>Completed</small>
        </div>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>{chapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.defaultProps = {
  author: 'Unknown',
  percent: 0,
  chapter: 'Introduction',
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.string,
  percent: PropTypes.number,
  chapter: PropTypes.string,
};

export default Book;
