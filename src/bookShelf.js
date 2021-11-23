import React, { Component } from 'react'

import BookList from './bookList'

class BookShelf extends Component {




   

    render(){
      

       const {shelf}= this.props;

       const bookshelf=this.props.ShelfBooks(shelf)
      
        return(

                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.toUpperCase()}</h2>

                  <BookList appbooks={this.props.appbooks} books={bookshelf} ubdate={this.props.ubdate}  />


                </div>
        )
    } 
}


export default  BookShelf ;