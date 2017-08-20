import { combineReducers } from 'redux';

// import individual reducers
import booksReducer from './reducer_books';
import selectedBookReducer from './reducer_selected_book';


const rootReducer = combineReducers({
    books : booksReducer,
    selectedBook : selectedBookReducer
});

export default rootReducer;
