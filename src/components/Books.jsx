import { useState } from 'react';
import Book from './Book';

const Books = () => {
  const [books] = useState([{
    id: 0,
    title: 'Wow',
    author: 'Me',
  }]);

  return (
    <>
      <h3>All Books</h3>
      <ul>
        { books.map((book) => (
          <Book key={book.id} props={book} />
        ))}
      </ul>
      <form>
        <h4>Add New Book</h4>
        <input placeholder="Title" />
        <input placeholder="Author" />
        <button type="button">Add Book</button>
      </form>
    </>
  );
};

export default Books;
