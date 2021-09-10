import './books.css';
import { useState, useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as UUID } from 'uuid';
import { addBook, createApp, getBooks } from '../redux/books/books';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    createApp();
    dispatch(getBooks());
  }, [dispatch]);
  const books = useSelector((state) => state.booksReducer);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const setBookTitle = (e) => {
    setTitle(e.target.value);
  };

  const setBookCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      id: UUID(),
      title,
      category,
      author: 'SomeOne',
      progress: '15%',
      currentChapter: 'Chapter 5',
    };
    dispatch(addBook(newBook));
  };

  return (
    <>
      <ul>
        { books.map((book) => (
          <Book key={book.id} props={book} />
        ))}
      </ul>
      <form className="add-book-form">
        <h4 className="add-new-book">Add New Book</h4>
        <input placeholder="Title" onChange={setBookTitle} className="book-title-input" />
        <input placeholder="Category" onChange={setBookCategory} className="book-category-input" />
        <button type="button" onClick={submitBookToStore} className="btn add-book-button">Add Book</button>
      </form>
    </>
  );
};

export default Books;
