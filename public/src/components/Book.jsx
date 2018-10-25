import React from 'react';
import './Book.css';

const Book = ({
  handleBookClick, title, author, keywords, coverUrl, bolded,
}) => {
  let boldClass;
  bolded ? (boldClass = 'bold') : '';
  return (
    <li onClick={() => handleBookClick(keywords)}>
      <div className={boldClass}>
        <div>
          Title:
          {title}
        </div>
        <div>
          Author:
          {author}
        </div>
        <div>
          Keywords:
          {keywords.map(key => (
            <div>{key}</div>
          ))}
        </div>
      </div>
      <div>
        <img className="img" src={coverUrl} alt="Book" />
      </div>
    </li>
  );
};

export default Book;
