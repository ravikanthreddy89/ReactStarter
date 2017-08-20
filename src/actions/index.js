export default function(selectedBook){
    console.log("The book selected : ", selectedBook);
    return {
        type : 'BOOK_SELECTED',
        payload : selectedBook
    }
}
