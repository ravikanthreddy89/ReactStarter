import React, { Component } from 'react';

import {connect} from 'react-redux';

class BookDetail extends Component {

    render(){

        console.log( " this.props.selectedBook : ", this.props.selectedBook);
        if(!this.props.selectedBook){
            return(
                <div>Please select a book from the list of books</div>
            );
        }

        return(
            <div>
                You have selected : {this.props.selectedBook.title}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        selectedBook : state.selectedBook
    }
}

export default connect(mapStateToProps)(BookDetail);
