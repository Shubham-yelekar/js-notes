import { Member } from "./models/Member.js";
import { Admin } from "./models/Admin.js";
import { Book } from "./models/book.js";
import { LibrarySystem } from "./services/LibraryService.js";

const roleSwitcher = document.getElementById("roleSwitcher");
const addbookFormWrapper = document.getElementById("addbookFormWrapper");
const addbookForm = document.getElementById("addbookForm");
const availableBookList = document.getElementById("availableBookList");
const borrowedBookList = document.getElementById("borrowedBookList");
const borrowedWrapper = document.getElementById("borrowedWrapper");
const library = new LibrarySystem();
let currentUser = new Member("Raj", "raj@gmail.com");

roleSwitcher.addEventListener("change", (e) => {
  const selected = e.target.value;
  currentUser =
    selected === "admin"
      ? new Admin("Shubham", "shubham@gmail.com")
      : new Member("Raj", "raj@gmail.com");
  addbookFormWrapper.style.display = selected === "admin" ? "block" : "none";
  borrowedWrapper.style.display = selected === "member" ? "block" : "none";

  renderBook();
});

addbookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("book_title").value;
  const author = document.getElementById("book_author").value;
  const genre = document.getElementById("book_genre").value;
  const book = new Book(title, author, genre);
  library.addBook(book);
  renderBook();
  renderBorrowedList();
  addbookForm.reset();
});

availableBookList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.getAttribute("data-id");
    const action = e.target.getAttribute("data-action");
    const book = library.getBookById(id);

    if (
      action === "borrow" &&
      currentUser.getRole() === "Member" &&
      book.isAvailable
    ) {
      currentUser.borrowBook(book);
      renderBook();
      renderBorrowedList();
    }
  }
});
borrowedBookList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.getAttribute("data-id");
    const action = e.target.getAttribute("data-action");
    if (action === "return" && currentUser.getRole() === "Member") {
      currentUser.returnBook(id);
      renderBook();
      renderBorrowedList();
    }
  }
});

function renderBook() {
  availableBookList.innerHTML = "";
  library.getAllBooks().forEach((book) => {
    const li = document.createElement("li");
    let controls = "";
    if (currentUser.getRole() === "Member" && book.isAvailable) {
      controls = ` <button data-action = "borrow" data-id = "${book.id}"
                class="bg-green-400 font-bold cursor-pointer hover:bg-green-500 p-1"
              >
                Borrow
              </button>`;
    } else if (currentUser.getRole() === "Admin") {
      controls = `<span>${book.isAvailable ? "Available" : "borrowed"}</span>`;
    }
    li.innerHTML = `<div class="p-2 bg-green-300">
              <h2 class="text-lg font-bold">${book.title}</h2>
              <p>${book.author}</p>
              ${controls}
            </div>`;

    availableBookList.appendChild(li);
  });
}

function renderBorrowedList() {
  borrowedBookList.innerHTML = "";
  if (currentUser.getRole() !== "Member") return;
  const borrowedBooks = currentUser.getBorrowedBooks();
  borrowedBooks.forEach((book) => {
    const li = document.createElement("li");

    li.innerHTML = `<div class="p-2 bg-green-300">
              <h2 class="text-lg font-bold">${book.title}</h2>
              <p>${book.author}</p>
              <button data-action="return" data-id="${book.id}" class="bg-green-400 font-bold cursor-pointer hover:bg-green-500 p-1" >Return</button>
            </div>`;

    borrowedBookList.appendChild(li);
  });
}

addbookFormWrapper.style.display = "none";
renderBook();
renderBorrowedList();
