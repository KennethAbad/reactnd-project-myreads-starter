import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class ListBooks extends Component {
    state = {
        query: ''
    }

    render() {
        let currentlyReading = [];
        let wantToRead = [];
        let read = [];
        
        this.props.library.forEach((book) => {
            if(book.shelf === "currentlyReading") {
                currentlyReading.push(book)
            }
        })
        
        this.props.library.forEach((book) => {
            if(book.shelf === "wantToRead") {
                wantToRead.push(book)
            }
        })
        
        this.props.library.forEach((book) => {
            if(book.shelf === "read") {
                read.push(book)
            }
        })
        
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <BookShelf title="Currently Reading" moveBook={this.props.moveBook} books={currentlyReading} />
                            <BookShelf title="Want to Read" moveBook={this.props.moveBook} books={wantToRead} />
                            <BookShelf title="Read" moveBook={this.props.moveBook} books={read} />
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search" className="">Search</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListBooks