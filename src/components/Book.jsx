/* eslint-disable react/prop-types */

import React from 'react';

const Book = ({ props }) => {
  const { id, title, author } = props;
  return (
    <li>
      <span>{title}</span>
      <span> by </span>
      <span>{author}</span>
      <button id={id} type="button">Delete</button>
    </li>
  );
};

export default Book;
