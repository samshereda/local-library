// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const outBooks = books
    .filter(book => book.borrows
      .some(borrow => !borrow.returned));
  const inBooks = books
    .filter(book => book.borrows
      .every(borrow => borrow.returned));
  return [outBooks, inBooks];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map(borrow => {
      const account = accounts.find(account => account.id === borrow.id)
      return {...borrow, ...account}
    })
    .slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
