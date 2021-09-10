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
    };
    dispatch(addBook(newBook));
  };

  return (
    <>
      <h3>All Books</h3>
      <form>
        <h4>Add New Book</h4>
        <ul>
          { books.map((book) => (
            <Book key={book.id} props={book} />
          ))}
        </ul>
        <input placeholder="Title" onChange={setBookTitle} />
        <input placeholder="Category" onChange={setBookCategory} />
        <button type="button" onClick={submitBookToStore}>Add Book</button>
      </form>
    </>
  );
};

export default Books;
