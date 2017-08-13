import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    state = {
        
    };

    render() {
        const { image } this.props
        
        return (
            <div className='book'>
                <div className='book-top'>
                    <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url("${image}")` }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={this.props.book.shelf} onChange={(e) => this.props.moveBook(this.props.book, e.target.value)}>

                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors && this.props.book.authors.join(', ')</div>
            </div>
        )
    }
}

Book.PropTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
}

export default Book;