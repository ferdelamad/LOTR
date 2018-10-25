import React, { Component } from 'react';
import { sampleData } from '../sampleData';
import './App.css';
import Book from './Book';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData,
      filter: '',
      boldedBooks: [],
      clickKeys: [],
    };
    this.handleBookClick = this.handleBookClick.bind(this);
  }

  handleBookClick(e, clickKeys) {
    console.log('e', e)
    this.setState({ clickKeys });
    const { data } = this.state;
    const filter = {};
    for (let i = 0; i < clickKeys.length; i += 1) {
      filter[clickKeys[i]] = true;
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
    const { data, boldedBooks, clickKeys } = this.state;
    return (
      <div className="main">
        <h1 className="title">Book Library</h1>
        <ul>
          {data.map((book, i) => (
            <Book
              {...book}
              bolded={boldedBooks[i]}
              key={i}
              handleBookClick={this.handleBookClick}
              clickKeys={clickKeys}
            />
          ))}
        </ul>
      </div>
    );
  }
}
