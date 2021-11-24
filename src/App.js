import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Library from "./library";
import Search from "./search";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  // list all  books that app have

  Booklist = async () => {
    const books = await BooksAPI.getAll();
    this.setState(() => ({ books: books }));
  };

  // ubdate the book's shelf and add it to the app data
  UbdateShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf).then((books) => {
      const updateShelf = this.state.books.map((c) => {
        if (c.id === book.id) {
          c.shelf = shelf;
        }
        return c;
      });

      this.setState({
        books: updateShelf,
      });
    });

    this.Booklist();
  };

  // dynamicly ubdate the page content
  componentDidMount = () => {
    this.Booklist();
  };
  // this function get called from the bookShelf component , it makes new list of books for each individual shelf
  ShelfBooks = (shelf) => {
    // have called the gitAll fun again so the main page ubdates when we add a new book from the search component
    return this.state.books.filter(
      (book) => book.shelf === shelf.replace(/\s/g, "")
    );
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <Search appbooks={this.state.books} ubdate={this.UbdateShelf} />
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <Library
              appbooks={this.state.books}
              ShelfBooks={this.ShelfBooks}
              books={this.state.books}
              ubdate={this.UbdateShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
