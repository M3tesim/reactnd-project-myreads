import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

import BookShelf from './bookShelf'
import { Link } from 'react-router-dom'
import './App.css'


class Library extends Component{ 
    
    state={
    
    books:[]
}




// list all  books that app have 
    
Booklist = async ()=>{
    const books = await BooksAPI.getAll();
    this.setState(()=> (
    { books : books }

                    ))};


// ubdate the book's shelf and add it to the app data
  UbdateShelf= async (book, shelf) => {
    await  BooksAPI.update(book, shelf).then(books => {
        const updateShelf = this.state.books.map(c => {
          if (c.id === book.id) {
            c.shelf = shelf
          }
          return c;
        });
  
        this.setState({
          books: updateShelf,
        });
        
  
      })}

// dynamicly ubdate the page content 
      componentDidMount = () => {
        this.Booklist();
      }

    render(){
      





    return(

        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf  shelf="currently Reading" books={this.state.books} ubdate={this.UbdateShelf}  />

            <BookShelf  shelf="want To Read" books={this.state.books}  ubdate={this.UbdateShelf}/>

            <BookShelf  shelf="read" books={this.state.books} ubdate={this.UbdateShelf} />

          
          </div>
        </div>
        <div className="open-search">
          <Link className="link" to={'/search'}>Add a book</Link>
        </div>
      </div>
    )
    }
}


export default Library ;