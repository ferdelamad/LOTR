import React, { Component, Fragment } from "react";
import { sampleData } from "../sampleData";
import Book from "./Book";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData
    };
    this.handleBookClick = this.handleBookClick.bind(this);
  }

  handleBookClick(keywords) {
    console.log("clicked", keywords);
  }

  render() {
    const { data } = this.state;
    return (
      <Fragment>
        <h1>LOTR Loading!</h1>
        <ul>
          {data.map(book => (
            <Book bookInfo={book} handleBookClick={this.handleBookClick} />
          ))}
        </ul>
      </Fragment>
    );
  }
}
