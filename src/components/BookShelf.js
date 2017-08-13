import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
    state = {}

    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => 
                            <Book key={book.id}
                                  image={book.imageLinks.thumbnail} 
                                  book={book}
                                  moveBook={this.props.moveBook}
                            />
                        )}

                        <li></li>
                    </ol>
                </div>
            </div>
        )
    }
}

BookShelf.PropTypes = {
    title: PropTypes.string.isRequired
}

export default BookShelf