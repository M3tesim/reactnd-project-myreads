import React, { Component } from 'react'

import BookShelf from './bookShelf'
import { Link } from 'react-router-dom'
import './App.css'


class Library extends Component{ 
    


    render(){

      
      const {ubdate,books}= this.props



    return(

        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf  appbooks={this.props.appbooks} shelf="currently Reading" books={books} ubdate={ubdate}  ShelfBooks={this.props.ShelfBooks}/>

            <BookShelf appbooks={this.props.appbooks} shelf="want To Read" books={books} ubdate={ubdate} ShelfBooks={this.props.ShelfBooks}/>

            <BookShelf  appbooks={this.props.appbooks} shelf="read" books={books} ubdate={ubdate}  ShelfBooks={this.props.ShelfBooks}/>

          
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