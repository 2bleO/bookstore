/* eslint-disable react/prop-types */
import './book.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ props }) => {
  const dispatch = useDispatch();
  const {
    id, title, category, author, progress, currentChapter,
  } = props;

  const removeBookFromStore = (e) => {
    dispatch(removeBook({ id: e.target.id }));
  };

  return (
    <li className="book-panel bg-white d-flex align-items-center justify-content-between" key={id}>
      <div className="d-inline-flex flex-column">
        <span className="book-genre">{category}</span>
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>
        <span className="d-inline-block">
          <button id={id} type="button" className="btn btn-link border-end book-link ps-0">Comments</button>
          <button id={id} type="button" className="btn btn-link border-end book-link" onClick={removeBookFromStore}>Delete</button>
          <button id={id} type="button" className="btn btn-link book-link">Edit</button>
        </span>
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center border-end">
          <div className="progress-oval d-inline-block" />
          <span>
            <div className="percent-complete">{progress}</div>
            <div className="completed">Completed</div>
          </span>
        </div>
        <div className="d-flex flex-column">
          <div className="current-chapter">CURRENT CHAPTER</div>
          <div className="current-lesson">{currentChapter}</div>
          <button type="button" className="btn btn-update">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

export default Book;
