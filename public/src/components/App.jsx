import React, { Component, Fragment } from 'react';
import { sampleData } from '../sampleData';
import Book from './Book';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData,
      filter: '',
      boldedBooks: [],
    };
    this.handleBookClick = this.handleBookClick.bind(this);
  }

  handleBookClick(keywords) {
    const { data } = this.state;
    const filter = {};
    for (let i = 0; i < keywords.length; i += 1) {
      filter[keywords[i]] = true;
    }
    this.toggleTitles(filter, data);
  }

  toggleTitles(filter, books) {
    const boldedBooks = [];
    books.forEach((book, i) => {
      const { keywords } = book;
      keywords.forEach((key) => {
        if (filter[key]) {
          boldedBooks[i] = true;
        }
      });
    });
    this.setState({ boldedBooks });
  }

  render() {
    const { data, filter, boldedBooks } = this.state;
    return (
      <Fragment>
        <h1>LOTR Loading!</h1>
        <ul>
          {data.map((book, i) => (
            <Book
              {...book}
              bolded={boldedBooks[i]}
              key={i}
              handleBookClick={this.handleBookClick}
              filter={filter}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}
