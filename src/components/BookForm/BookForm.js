import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/slices/booksSlice.js";
import createBookWithId from "../../utils/createBookWithId.js";
import "./BookForm.css";
import booksData from "../../data/books.json";
//
const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  //
  const handleAddRandomBook = () => {
    // take random index
    const randomIndex = Math.floor(Math.random() * booksData.length);
    // take random book
    const randomBook = booksData[randomIndex];
    // create book data and add it to state
    dispatch(addBook(createBookWithId(randomBook)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch action
    if (author && title) {
      dispatch(
        addBook(
          createBookWithId({
            title,
            author,
          })
        )
      );

      setTitle("");
      setAuthor("");
    }
  };
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
      </form>
    </div>
  );
};
export default BookForm;
