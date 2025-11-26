import { User } from "./User.js";

const borrowedMap = new WeakMap();

export class Member extends User {
  constructor(name, email) {
    super(name, email);
    const borrowedFromStorage =
      JSON.parse(localStorage.getItem("borrowBooks")) || [];
    borrowedMap.set(this, borrowedFromStorage);
  }

  borrowBook(book) {
    const borrowed = borrowedMap.get(this);
    borrowed.push(book);
    book.isAvailable = false;
    localStorage.setItem("borrowBooks", JSON.stringify(borrowed));
  }

  getBorrowedBooks() {
    return borrowedMap.get(this);
  }

  returnBook(bookId) {
    const borrowed = borrowedMap.get(this);
    const book = borrowed.find((b) => b.id === bookId);
    book.isAvailable = true;
    const update = borrowed.filter((b) => b.id !== bookId);
    borrowedMap.set(this, update);
    localStorage.setItem("borrowBooks", JSON.stringify(update));
    console.log(borrowedMap);
  }
  getRole() {
    return "Member";
  }
}
