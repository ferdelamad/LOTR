import React from "react";

const Book = ({ bookInfo: { author, title, keywords, coverUrl } }) => (
  <li>
    <div>Title: {author}</div>
    <div>Title: {title}</div>
    <div>
      Cover:
      <img src={coverUrl} />
    </div>
    <div>
      Keywords:
      {keywords.map(key => (
        <div>{key}</div>
      ))}
    </div>
  </li>
);

export default Book;
