import React, { Component } from 'react';

// components
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
