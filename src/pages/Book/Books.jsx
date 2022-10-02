import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Eloquent JavaScript, Third Edition",
  },
  {
    id: 2,
    title: "Practical Modern JavaScript",
  },
  {
    id: 3,
    title: "Understanding ECMAScript 6",
  },
];

const Books = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {books.map((b) => (
        <div
          key={b.id}
          style={{ width: "20%", height: 300, backgroundColor: "pink" }}
        >
          <NavLink to={`details/${b.id}`}>{b.title}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default Books;
