import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
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
          <button type="button" className="list-btn">Remove</button>
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
  category: 'Miscellaneous',
};

Book.propTypes = {
  book: PropTypes.instanceOf(Array).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  author: PropTypes.string,
  percent: PropTypes.number,
  chapter: PropTypes.string,
};

export default Book;
