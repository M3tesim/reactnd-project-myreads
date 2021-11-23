import React, { Component } from 'react'
import Book from './book'



class BookList extends Component {
    render(){

        const {books,ubdate,shelf} =this.props
       
        return(

            <div className="bookshelf-books">
            <ol className="books-grid"> 

              {books.map((book)=>(
                      <li key={book.id}>
                      <Book book={book}  ubdate={ubdate} shelf={shelf} />
                    </li> 


                 ))}

             </ol>
                  
                  </div>
        )
    }
}


export default BookList ;