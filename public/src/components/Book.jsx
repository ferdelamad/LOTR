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
  let boldTarget;
  boldKey ? (boldKey = 'keyword') : '';
  target === index ? (boldTarget = 'target') : '';
  return (
    <li className="book-container" onClick={() => handleBookClick(index, keywords)}>
      <div className={`book-info ${boldTarget}`}>
        <div className="header">
          Title:
          <div className="body">{title}</div>
        </div>
        <div className="header">
          Author:
          <div className="body">{author}</div>
        </div>
        <div className="header">
          Keywords:
          <div className="body">
            {keywords.map(
              key => (clickKeys.includes(key) ? <div className={boldKey}>{key}</div> : <div>{key}</div>),
            )}
          </div>
        </div>
      </div>
      <div>
        <img className="img" src={coverUrl} alt="Book" />
      </div>
    </li>
  );
};

export default Book;
