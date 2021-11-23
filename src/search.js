import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './bookList'


class Search extends Component {

state={
    value: "",
    books:[]
}



// search function that take an input and return array of data from the bookAPI
 SearchBar = async(query)=> {
     if (query.length > 0) {
   await BooksAPI.search(query).then(searshResult=>{
    

    this.setState(()=>({
        value: query ,
        books:searshResult
    
        }))
      })

  }else {
    //reset search results after 
   await  this.setState(
       { books: [] ,
        value:''   }
      )}
}







    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to={'./'}>Close</Link>
              <div className="search-books-input-wrapper">

                                
                <input type="text" placeholder="Search by title or author"  onChange={(e)=>this.SearchBar(e.target.value)}/>

              </div>

            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              <BookList appbooks={this.props.appbooks} books={this.state.books} ubdate={this.props.ubdate}   />


              </ol>
            </div>
          </div>
        )
    }
}


export default Search ;