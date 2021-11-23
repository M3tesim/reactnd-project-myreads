import React, { Component } from 'react'
class Book extends Component {

  
  handleChange = event => {
    this.props.ubdate(this.props.book, event.target.value);
  }

     render() {


      const {book,appbooks}=this.props

      appbooks.map(b=>(
        b.id === book.id ? book.shelf=b.shelf:book.shelf=book.shelf
      ))


      let imgURL 
      try {
        imgURL=`url(${book.imageLinks.smallThumbnail })`

      }
      catch(e){
        try{
          imgURL=`url(${book.imageLinks.Thumbnail })`

        }
        catch(e){
          imgURL= ""

        }
      }  


      let authors 
      try {

        if(authors=book.authors) throw  authors="Unkowen authors";
        
      }catch(e){
       authors=""

      }
     
      
    
     
        return(

            <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imgURL }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={this.handleChange}  value={book.shelf} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
        )
    }


}

export default Book ;