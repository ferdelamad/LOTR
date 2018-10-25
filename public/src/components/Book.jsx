import React from 'react';
import './Book.css';

const Book = ({
  handleBookClick,
  title,
  author,
  keywords,
  coverUrl,
  boldKey,
  clickKeys,
  index,
  target,
}) => {
  const boldTarget = target === index ? 'book-info bold' : 'book-info';
  boldKey ? (boldKey = 'keyword') : '';
  return (
    <li className="book-container" onClick={() => handleBookClick(index, keywords)}>
      <div className={boldTarget}>
        <h3>Title</h3>
        <p>{title}</p>
        <h3>Author</h3>
        <p>{author}</p>
        <h3>Keywords</h3>
        {keywords.map(
          key => (clickKeys.includes(key) ? <p className={boldKey}>{key}</p> : <p>{key}</p>),
        )}
      </div>
      <img className="img" src={coverUrl} alt="Book" />
    </li>
  );
};

export default Book;
