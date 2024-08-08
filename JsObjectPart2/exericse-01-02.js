// Exercise 01
// Create a constructor function called Book.
// The Book constructor function should initialize the following properties:
// title: a string representing the title of the book.
// author: a string representing the author of the book.
// pages: a number representing the total pages in the book.
// isRead: a boolean indicating if the book has been read or not.
// Add a method named summary to the prototype of the Book constructor. This method should return a string summarizing the book details in the format:
// "Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]".
console.info("Exercise 01");

function bookFunction(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.summary = function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? "Yes" : "No"}`;
  };
}

const bookOfFunction = new bookFunction("efg", "hij", 567, true);
console.log(bookOfFunction);
console.log(bookOfFunction.summary());

// Exercise 02
console.info("Exercise 02");

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? "Yes" : "No"}`;
  }
}

const bookOfClass = new Book("abc", "cde", 124, false);
console.log(bookOfClass);
console.log(bookOfClass.summary());


