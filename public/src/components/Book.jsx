import React from 'react';
import './Book.css';

const Book = ({
  handleBookClick, title, author, keywords, coverUrl, bolded, clickKeys,
}) => {
  let boldClass;
  bolded ? (boldClass = 'keyword') : '';
  return (
    <li className="book-container" onClick={e => handleBookClick(e, keywords)}>
      <div>
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
          <div>
            {keywords.map(
              key => (clickKeys.includes(key) ? <div className={boldClass}>{key}</div> : <div>{key}</div>),
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
