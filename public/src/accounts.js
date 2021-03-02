// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    return accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    return book.borrows.filter(borrow => {
      return borrow.id === account.id;
    }).length + total;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter(book => book.borrows
      .some(borrow => borrow.id === account.id && !borrow.returned))
    .map(book => {
      let author = authors.find(author => book.authorId === author.id);
      book.author = author;
      return book;
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
