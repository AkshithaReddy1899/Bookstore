const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state;
      /*
        use ES6 filter() method to create a new array, */

      /*  which will not contain the book you want to remove from the store */
      /*
        (filter by the id key - i.e.:
        return state.filter(book => book.id !== id);
        */

    default:
      return state;
  }
};

export default reducer;

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
