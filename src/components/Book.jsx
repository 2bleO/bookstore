/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ props }) => {
  const dispatch = useDispatch();
  const { id, title } = props;

  const removeBookFromStore = (e) => {
    dispatch(removeBook({ id: e.target.id }));
  };

  return (
    <li>
      <span>{title}</span>
      <button id={id} type="button" onClick={removeBookFromStore}>Delete</button>
    </li>
  );
};

export default Book;
