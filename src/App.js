import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks';
import Search from './components/Search';


class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    bookShelves: [ "currentlyReading", "wantToRead", "read"],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    library: [],  
    showSearchPage: true
  }
  // This method grabs all the books from the api through ajax requests and creates a library.
  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({library: this.state.library.concat(books)})
      })
  }
  // This method takes the selected book and its new shelf selection. It then assigns the book its new shelf and handles the change in state
  moveBook = (book, newShelf) => {
      BooksAPI.update(book, newShelf).then(item => {
          book.shelf = newShelf
          
          this.setState(state => ({
              library: state.library.filter(item => item.id !== book.id).concat([ book ])
          }))
      })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
            <ListBooks moveBook={this.moveBook} library={this.state.library} />
        )}/>
        <Route path="/search" render={() => (
            <Search moveBook={this.moveBook} library={this.state.library} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
