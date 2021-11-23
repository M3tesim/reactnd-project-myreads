import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './bookList'


class Search extends Component {

state={
    value: "",
    books:[]
}


 SearchBar = async(e)=> {
     const query= e.target.value ;
   await BooksAPI.search(query).then(books=>(
    this.setState(()=>({
        value: query ,
        books
    
        }))
   ))
    

    console.log(this.state)

}




    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to={'./'}>Close</Link>
              <div className="search-books-input-wrapper">
                
                  <BookList books={this.state.books} ubdate={this.props.ubdate}  />

                
                <input type="text" placeholder="Search by title or author" value={this.state.value}  onChange={this.SearchBar}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}


export default Search ;