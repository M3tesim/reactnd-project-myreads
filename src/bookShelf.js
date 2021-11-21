import React, { Component } from 'react'

import BookList from './bookList'

class BookShelf extends Component {

  state={
       books:[],

  }


    render(){

       const {currentState}= this.props

        return(

        
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{currentState}</h2>
                  <BookList books={this.state.books}  />


                </div>
        )
    }
}


export default  BookShelf ;