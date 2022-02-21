import React from 'react';

const Books = () => {
  console.log('HI');
  return (
    <div>
      <ul>
        <li className="book-list d-flex justify-content-between p-3 m-2">
          <p>.....</p>
          <button type="button" className="btn btn-secondary">Add</button>
        </li>
        <li className="book-list d-flex justify-content-between p-3 m-2">
          <p>.....</p>
          <button type="button" className="btn btn-secondary">Add</button>
        </li>
      </ul>
      <br />
      <hr />
      <br />
      <form className="d-flex">
        <div className="m-3">
          <input type="email" className="form-control" placeholder="Book name" />
        </div>
        <div className="m-3">
          <select id="category" className="form-select">
            <option selected disabled>Category</option>
          </select>
        </div>
        <div className="m-3">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Books;
