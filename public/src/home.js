// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => book.borrows.some(borrow => !borrow.returned)).length;
}

function getMostCommonGenres(books) {
  let genres = books.reduce((genres, book) => {
    const genre = genres.find(genre => genre.name === book.genre);
    if (genre){
      genre.count ++;
    } else {
      genres.push({name: book.genre, count: 1});
    }
    console.log(genres);
    return genres;
  }, []);
  return sortAndSlice(genres);
}

function getMostPopularBooks(books) {
  return sortAndSlice(books.map(book => {
    return {name: book.title, count: book.borrows.length};
  }));
}

function getMostPopularAuthors(books, authors) {
  return sortAndSlice(authors.map(author => {
    const name = `${author.name.first} ${author.name.last}`;
    const count = books
      .filter(book => author.id === book.authorId)
      .reduce((borrowCount, book) => borrowCount + book.borrows.length, 0);
    return {name, count};
  }));
}

function sortAndSlice(array, limit = 5){
  return array
    .sort((itemA, itemB)=> itemA.count < itemB.count ? 1 : -1)
    .slice(0, limit);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
