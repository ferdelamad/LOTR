import React from "react";

const Book = ({ bookInfo: { author, title, keywords } }) => (
  <li>
    <div>{author}</div>
    <div>{title}</div>
    <div>
      Keywords:{" "}
      {keywords.map(key => (
        <div>{key}</div>
      ))}
    </div>
  </li>
);

export default Book;
