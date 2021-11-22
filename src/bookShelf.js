import React, { Component } from 'react'

import BookList from './bookList'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {

  state={
       books:[],

  }

   //this function shoul add all the books in the shelf to the stat array "books"

   Booklist = async ()=>{
  const books = await BooksAPI.getAll()
  this.setState(()=> (
    { books : books

  }))
};

componentDidMount = () => {
  this.Booklist();
}

    render(){

       const {shelf }= this.props;
       console.log(this.state.books);
        return(

                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf}</h2>
                  <BookList books={this.state.books}  />


                </div>
        )
    } 
}


export default  BookShelf ;