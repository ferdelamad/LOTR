import React, { Component, Fragment } from "react";
import { sampleData } from "../sampleData";
import Book from "./Book";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData,
      filter: ""
    };
    this.handleBookClick = this.handleBookClick.bind(this);
  }

  handleBookClick(keywords) {
    console.log("clicked", keywords);
    const filter = {};
    keywords.forEach(keyword => (filter[keyword] = true));
    this.setState({ filter }, () => console.log(this.state.filter));
  }

  render() {
    const { data, filter } = this.state;
    return (
      <Fragment>
        <h1>LOTR Loading!</h1>
        <ul>
          {data.map(book => (
            <Book
              bookInfo={book}
              handleBookClick={this.handleBookClick}
              filter={filter}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}
