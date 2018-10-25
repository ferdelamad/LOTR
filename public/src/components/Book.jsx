import React from 'react';

const Book = ({
  handleBookClick, title, author, keywords, coverUrl, bolded,
}) => (
  <li onClick={() => handleBookClick(keywords)}>
    {bolded && <p>YES</p>}
    <div>
      Title:
      {author}
    </div>
    <div>
      Title:
      {title}
    </div>
    <div>
      Cover:
      <img src={coverUrl} alt="Book" />
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
