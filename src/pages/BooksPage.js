import React from 'react';
// import axios from 'axios';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
/*
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBe90uqRO1hTPAhcsMkC';

axios({
  url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBe90uqRO1hTPAhcsMkC/books',
  method: 'GET',
})
  .then((response) => JSON.stringify(response))
  .then((data) => { console.log(data); });
/*
axios.get(url, {
  header: {
    'content-type': 'application/json',
  },
}).then((response) => {
  console.log('HI');
  console.log(response);
});
*/
const Books = () => (
  <div>
    <BookList />
    <AddBook />
  </div>
);

export default Books;
