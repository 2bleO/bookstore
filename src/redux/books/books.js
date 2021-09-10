import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const createApp = async () => {
  if (!localStorage.getItem('bookstore')) {
    const register = await axios.post(`${BASE_URL}/apps/`);
    const id = await register.data;
    localStorage.setItem('bookstore', id);
  }
};

export const getBooks = () => async (dispatch) => {
  const appId = localStorage.getItem('bookstore');
  const books = await axios.get(`${BASE_URL}/apps/${appId}/books`);
  const booksObj = await books.data;
  const list = Object.keys(booksObj);
  const fetchedBooks = [];
  list.map((book) => fetchedBooks.push({
    id: book,
    title: booksObj[book][0].title,
    category: booksObj[book][0].category,
  }));
  await dispatch({
    type: GET_BOOKS,
    payload: fetchedBooks,
  });
};

export const addBook = (payload) => async (dispatch) => {
  const appId = localStorage.getItem('bookstore');
  await fetch(`${BASE_URL}/apps/${appId}/books`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    body: JSON.stringify({
      item_id: payload.id,
      title: payload.title,
      category: payload.category,
    }),
  });

  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  const appId = localStorage.getItem('bookstore');
  await fetch(`${BASE_URL}/apps/${appId}/books/${payload.id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    body: JSON.stringify({
      item_id: payload.id,
    }),
  });

  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [...action.payload];

    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;
