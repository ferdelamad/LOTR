import React from "react";

const Book = ({
  bookInfo: { author, title, keywords, coverUrl },
  handleBookClick
}) => (
  <li onClick={() => handleBookClick(keywords)}>
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

// Book.propTypes = {
//   bookInfo: PropTypes.object.isRequired,
//   info: PropTypes.array.isRequired
// };

export default Book;
