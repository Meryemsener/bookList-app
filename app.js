//we need book class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: " Jane DOe",
        isbn: "3434434"
      },
      {
        title: "Book Two",
        author: " Jane DOe",
        isbn: "45545"
      }
    ];
    const books = SroredBooks;
    books.forEach((book)=> UI.addBookToList(book));


  }
  static addBookToList(book){
      const list = document.querySelector('#book-list');

      const row = document.createElement('tr');

      row.innerHTML = `
      <td>${book.title}</td> 
      <td>${book.author}</td>
      <td>${book.isbn}</td> 
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
  
  static showAlert(message, className){
     const div = document.createElement('div');
     div.className = 'alert-${className}';
     div.appendChild(document.createTextNode(message));
     const container = document.querySelector('.container');
     const form = document.querySelector('#book-form');
     container.insertBefore(div, form);
    //3 second
    setTimeout(()=>document.querySelector('.alert').remove(),3000);
  }
  
  static clearFields(){
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';

  }

}
//Store class
//event:display books

document.addEventListener('DOMCOntentLoaded', UI.displayBooks);



//event:add a book
document.querySelector('#book-form').addEventListener('submit', (e)=> {
    //Prevent actual submit
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
//validate
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill in all blank", "danger");
  } else {
   
    //instatiate book
    const book = new Book(title, author, isbn);
    //add book to UL
    UI.addBookToList(book);
    //Show success message
    UI.showAlert('Book Added', 'success');
    //clear
    UI.clearFields();
  }
});
  
//event:remove a book*/
document.querySelector("#book-list").addEventListener("click", (e)=> {
  UI.deleteBook(e.target);
  
  //show success message
    UI.showAlert('Book Removed', 'success');
});
