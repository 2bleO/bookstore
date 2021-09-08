import { useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as UUID } from 'uuid';
import { addBook } from '../redux/books/books';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const setBookTitle = (e) => {
    setTitle(e.target.value);
  };

  const setBookAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      id: UUID(),
      title,
      author,
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
        <input placeholder="Author" onChange={setBookAuthor} />
        <button type="button" onClick={submitBookToStore}>Add Book</button>
      </form>
    </>
  );
};

export default Books;
