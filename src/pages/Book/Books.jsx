import { NavLink } from "react-router-dom";
import { useBookStore } from "stores/BookStores";

const bookSelector = (state) => state.books;

const Books = () => {
  const addBook = useBookStore(s => s.addBook);
  const books = useBookStore(s => s.books);
  console.log("Book Render");
  
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "end", padding: 8 }}>
        {books.length}
        <button
          onClick={() =>
            addBook({ name: "asd", section: "asd" })
          }
        >
          ADD new one
        </button>
      </div>
      <BookList />
    </div>
  );
};

const BookList = () => {
  const books = useBookStore(bookSelector);

  console.log("Book List Render");

  return (
    <div
      style={{
        display: "flex",
        marginTop: 16,
        justifyContent: "space-around",
      }}
    >
      {books.map((b) => (
        <Book key={b.id} book={b} />
      ))}
    </div>
  );
};

const Book = ({ book }) => {
  return (
    <div
      style={{
        width: 148.5,
        height: 210,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        padding: 8,
      }}
    >
      <NavLink to={`details/${book.id}`}>{book.name}</NavLink>
      <h6>{book.section}</h6>
    </div>
  );
};

export default Books;
