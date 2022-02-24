import axios from 'axios';

/* eslint-disable camelcase */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBe90uqRO1hTPAhcsMkC/books';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [...state, action.payload];
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducer;

export const getBook = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooks = () => async (dispatch) => {
  axios.get(url, {
    method: 'GET',
    header: {
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      const { data } = response;
      Object.entries(data).forEach(([key, value]) => {
        const books = {};
        books.item_id = key;
        books.title = value[0].title;
        books.category = value[0].category;
        dispatch(getBook(books));
      });
    });
};

export const fetchAddBooks = (book) => async (dispatch) => {
  axios.post(url, book, {
    header: {
      'content-type': 'application/json',
    },
  })
    .then(() => {
      console.log('ds');
      dispatch(addBook(book));
    });
};
