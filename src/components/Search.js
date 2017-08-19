import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            query: '',
            results: []
        };
    }
    
    updateQuery = (query) => {
        this.setState({query})
    }
    
    onInputChange(event) {
        const searchTerm = BooksAPI.search(event.target.value, 50);
    }

    searchBooks(query) {
        this.setState({query: query})
        if(query) === undefined || query === "") {
            return this.setState({query: "", results: []})
        }
        BooksAPI.search(query, 20).then((resData) => {
            if(resData === undefined || resData.error === 'empty query') {
                return this.setState({results: []})
            }
            return this.setState({results: resData})
        })
    }

    render() {
        const { results } = this.state;
        let libraryContent
        if(!results) {
            libraryContent = []
        }
        else {
            libraryContent = results.map(book =>
                <Book key={book.id}
                      image={book.imageLinks && book.imageLinks.thumbnail}
                      book={book}
                      moveBook={this.props.moveBook}
                />
            );
        }
        
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onchange={(e) => this.searchBooks(e.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">{libraryContent}</ol>
                </div>
            </div>
        )
    }
}

export default Search