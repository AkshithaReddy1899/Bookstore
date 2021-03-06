/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDeleteBooks } from '../redux/books/books';
import '../styles/BookList.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    book,
    author,
    percent,
    chapter,
  } = props;
  const {
    item_id,
    title,
    category,
  } = book;

  return (
    <li className="book-list" key={item_id}>
      <div>
        <small><b className="category">{category}</b></small>
        <h6 className="title">{title}</h6>
        <small className="author">{author}</small>
        <div>
          <button type="button" className="list-btn">Comments</button>
          <button type="button" className="list-btn" onClick={() => dispatch(fetchDeleteBooks(item_id))}>Remove</button>
          <button type="button" className="list-btn">Edit</button>
        </div>
      </div>
      <div className="progress">
        <span className="circle" />
        <div>
          <h4 className="percentage">
            {percent}
            %
          </h4>
          <small>Completed</small>
        </div>
      </div>
      <div className="current">
        <p>CURRENT CHAPTER</p>
        <p className="chapter">{chapter}</p>
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
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.string,
  percent: PropTypes.number,
  chapter: PropTypes.string,
};

export default Book;
