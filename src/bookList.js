import React, { Component } from "react";
import Book from "./book";

class BookList extends Component {
  render() {
    const { books, ubdate, shelf } = this.props;

    // when the value of the search input is empty the return will be "no result"
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0
            ? books.map((book) => (
                <li key={book.id}>
                  {" "}
                  <Book
                    appbooks={this.props.appbooks}
                    book={book}
                    ubdate={ubdate}
                    shelf={shelf}
                  />{" "}
                </li>
              ))
            : "no result"}
        </ol>
      </div>
    );
  }
}

export default BookList;
