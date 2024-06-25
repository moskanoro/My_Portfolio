


/*adding the dom  ellements */

const booksContainer = document.getElementById("booksContainer");

 const newBookButton = document.getElementById("newBookButton");
 const newBookModal = document.getElementById("newBookModal");
const noBooksPrompt = document.querySelector(".noBooks");
const addBookForm = document.getElementById("addBookForm");

  const newBookTitle = document.getElementById("newBookTitle");
 const newBookAuthor = document.getElementById("newBookAuthor");


 const newBookNumPages = document.getElementById("newBookNumPages");
const newBookReadStatus = document.getElementById("newBookReadStatus");

let myLibrary = [];

/* bookS constructing  and adding
*/
function Book(title, author, numPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
}



Book.prototype.toggleReadStatus = function () 
{
  this.readStatus = this.readStatus === "Read" ? "Want to Read" : "Read";
};

/* to add books directly tothe libr
*/
function addNewBooktoLibrary(title, author, numPages, readStatus) {
  let newBook = new Book(title, author, numPages, readStatus);
  myLibrary.push(newBook);
}

// Create Book Card Element
function createBookCard(book, index) {
const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

const bookDetails = document.createElement("div");


  bookDetails.classList.add("bookDetails");
 const bookTitle = document.createElement("h3");
  bookTitle.classList.add("bookTitle");

  bookTitle.textContent = book.title;

 const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.textContent = `by ${book.author}`;


const numPages = document.createElement("p");
  numPages.classList.add("numPages");
  numPages.textContent = `${book.numPages} pages`;


const readStatusButton = document.createElement("button");
  readStatusButton.classList.add("readStatus");

  readStatusButton.textContent = book.readStatus;




 if (book.readStatus === "Want to Read") 
  
  {
 readStatusButton.classList.add("wantToRead");
  }

  const deleteBookIcon =  document.createElement ("button");

  deleteBookIcon.classList.add ("deleteBookButton");


  deleteBookIcon.textContent = "Delete";



  bookCard.appendChild(bookDetails);
  bookDetails.appendChild(bookTitle);
  bookDetails.appendChild(bookAuthor);
  bookDetails.appendChild(numPages);
  bookCard.appendChild(readStatusButton);
  bookCard.appendChild(deleteBookIcon);

  bookCard.setAttribute("data-index-number", index);

  /* togling for reading the status
  */

  readStatusButton.addEventListener("click", function () {
    book.toggleReadStatus();
    readStatusButton.textContent = book.readStatus;
    readStatusButton.classList.toggle("wantToRead");
  });

  /*button to delete the  book*/  deleteBookIcon.addEventListener("click", function ()
   {
    const index = parseInt(bookCard.getAttribute("data-index-number"));
    removeBookFromLibrary(index);
  });

  return bookCard;
}

/*displaying my Library*/ 


function displayLibrary() 
{
  booksContainer.innerHTML = "";
  if (myLibrary.length === 0) {
    noBooksPrompt.style.display = "block";
  } else {
    noBooksPrompt.style.display = "none";
    myLibrary.forEach((book, index) =>
     {
      const bookCard = createBookCard(book, index);
      booksContainer.appendChild(bookCard);
    });
  }
}

/* adding the form of submission ??!! to fix *-*
...
*/
addBookForm.addEventListener("submit", function (e)
 {

  e.preventDefault();
  addNewBooktoLibrary(

  newBookTitle.value.trim() || "Title Unknown",

   newBookAuthor.value.trim() || "Author Unknown",
    newBookNumPages.value.trim() || "Unknown number of",

    newBookReadStatus.checked ? "Read" : "Want to Read"

  );

 displayLibrary();
  addBookForm.reset();

  newBookModal.style.display = "none";});


/*showing the modal */


newBookButton.addEventListener("click", function ()
 {
  newBookModal.style.display = "block";
});


/* closing the modal

*/
document.querySelectorAll(".modalClose").forEach((closeButton) => 
  {
  closeButton.addEventListener
  ("click", function ()
   {
    newBookModal.style.display = "none";
  });
});

/*closing the modal outside the click

*/

window.addEventListener("click", function (event)
 {  if (event.target === newBookModal) 
    {
    newBookModal.style.display = "none";


  }
});

/*  removing the book from my library*/


function removeBookFromLibrary(index) 
{myLibrary.splice(index, 1);

  displayLibrary();}

/* intializing the test books 
!!!!!!!!!!!!!!!!!!!!!!!!!
*-*-*-*-*- well, that sh*t aint wroking
*/ 
addNewBooktoLibrary("NUIST_JAVASCRIPT", "Pr. Wang Haibin", 280, "Read");

addNewBooktoLibrary(
  "My nights without sleeping bcz of prgrming *-* ",
  "MOSKANOR",
  589,
  "Want to Read"

);
addNewBooktoLibrary("Death note", "MEGA boy", 482, "Read");
/* initializing the display when page run 
 
 */
displayLibrary();
