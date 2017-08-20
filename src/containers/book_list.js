import React, { Component } from 'react';

// connect this component to redux store
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


// import action creators
import selectedBook from '../actions/index';


class BookList extends Component{

    renderList(){
        return this.props.books.map(
                    (book) => {
                        return(
                            <li 
                                key={book.title} 
                                onClick={()=> this.props.selectedBook(book)}
                                className="list-group-item">
                                {book.title}
                            </li>
                        );    
                    });
    }


    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
};

function mapStateToProps(state){
    return { 
        books : state.books 
    };
}

function mapStateToDispatch(dispatch){
    return bindActionCreators({
        selectedBook : selectedBook
    }, dispatch);
}

export default connect(mapStateToProps, mapStateToDispatch)(BookList);
