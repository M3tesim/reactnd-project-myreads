import React, { Component } from "react";
class Book extends Component {
  handleChange = (event) => {
    this.props.ubdate(this.props.book, event.target.value);
  };

  render() {
    const { book, appbooks } = this.props;
    // this is to ubdate the search result shelf with the current data on our app , so user can recognise the books he have
    appbooks.map((b) => (b.id === book.id ? (book.shelf = b.shelf) : book.b));

    // handling search err
    let imgURL;
    try {
      imgURL = `url(${book.imageLinks.smallThumbnail})`;
    } catch (e) {
      try {
        imgURL = `url(${book.imageLinks.Thumbnail})`;
      } catch (e) {
        imgURL = "";
      }
    }

    let authors;
    try {
      authors = book.authors;
    } catch (e) {
      authors = "Unkowen authors";
    }

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: imgURL }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={this.handleChange}
              value={book.shelf ? book.shelf : "none"}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;
