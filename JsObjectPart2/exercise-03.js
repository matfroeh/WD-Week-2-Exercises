// Exercise 03
console.info("Exercise 03");

// Objective
// Learn and apply the four pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism.

// Instructions
// Create a base class LibraryItem  with private fields for title and author,
// and a method getInfo() to return a string with the item's title and author
// Since we are using private class fields, we need to create special functions called getters
//  to get the info securely from other classes that inherit from it.
class LibraryItem {
  #title;
  #author;
  constructor(title, author) {
    this.#title = title;
    this.#author = author;
  }
  getInfo() {
    return `Title: ${this.#title}, Author: ${this.#author}`;
  }
}

// Create a subclass Book that inherits from LibraryItem and adds a private field pages
// and a public method getInfo() that extends getInfo() to include the number of pages.
class Book extends LibraryItem {
  #pages;
  constructor(title, author, pages) {
    super(title, author);
    this.#pages = pages;
  }
  getInfo() {
    return super.getInfo() + `, ` + `Pages: ${this.#pages}`;
  }
}

const libray = new LibraryItem(
  "first title in library",
  "author of first title"
);
console.log(libray.getInfo());

const book = new Book("first title in library", "author of first title", 234);
console.log(book.getInfo());

// Create another subclass Member with private fields name and booksCheckedOut (an array to store Book objects).
// Add public methods checkOutBook(book), returnBook(book), and listBooks() to manage the books a member has checked out.
class Member extends LibraryItem {
  #name;
  #booksCheckedOut;
  constructor(title, author, name, booksCheckedOut) {
    // super(title, author, pages);
    super(title, author);
    this.#name = name;
    this.#booksCheckedOut = booksCheckedOut;
  }

  checkOutBook(book) {
    this.#booksCheckedOut.push(book);
    // console.log(this.#booksCheckedOut[0]);
  }

  returnBook(book) {
    this.#booksCheckedOut.splice(this.#booksCheckedOut.findIndex(book), 1);
  }

  listBooks() {
    this.#booksCheckedOut.forEach((element) => {
      console.log(element);
      element.getInfo();
    });
  }
}

const memberOne = new Member(
  "bookTitle 02",
  "book author of Title 02",
  "Mr. Book",
  []
);

console.log(memberOne);

memberOne.checkOutBook(libray);

console.log(memberOne);

console.log(memberOne.listBooks());

// In this example, the getInfo() method in LibraryItem and Book classes is a form of polymorphism.
// Remember, objects responding differently to the same methods.
