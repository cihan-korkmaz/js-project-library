function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = function () {
    let readInfo = "read";
    let notReadInfo = "not read yet";
    if (this.read) {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readInfo}`;
    } else {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${notReadInfo}`;
    }
    
}
let myBook = new Book("Şen Bilim", "Nietzsche", 150, false);
console.log(myBook.read);
console.log(myBook.info());

let myLibrary = [];

function addBookToLibrary() {
    let title = document.getElementById("frm1").title.value;
    let author = document.getElementById("frm1").author.value;
    let pages = document.getElementById("frm1").pages.value;
    let read;
    let answerToRead = document.getElementById("frm1").read.value;
    if (answerToRead.toLowerCase() === "yes") {
        read = true;
    } else {
        read = false;
    }
    myLibrary.push(new Book(title, author, pages, read));
    console.table(myLibrary);


}
function displayBooks() {
    const para = document.createElement("p");
    for (let i = 0; i < myLibrary.length; i++) {
        const title = document.createTextNode("Title: " + myLibrary[i].title);
        const author = document.createTextNode("Author: " + myLibrary[i].author);
        const pages = document.createTextNode("Pages: " + myLibrary[i].pages);
        let isItRead;
        if (myLibrary[i].read) {
            isItRead = "Yes";
        } else {
            isItRead = "No";
        }
        const read = document.createTextNode("Is it read?: " + isItRead);
        para.appendChild(title);
        para.appendChild(document.createElement("br"));
        para.appendChild(author);
        para.appendChild(document.createElement("br"));
        para.appendChild(pages);
        para.appendChild(document.createElement("br"));
        para.appendChild(read);
        para.appendChild(document.createElement("br"));
        let btn = document.createElement("button");
        btn.onclick = function() { removeBook(i); };
        btn.innerHTML = "Remove";
        para.appendChild(btn);
        para.appendChild(document.createElement("br"));
        let btn2 = document.createElement("button");
        btn2.onclick = function() { toggleRead(i); };
        btn2.innerHTML = "Toggle Read";
        para.appendChild(btn2);
        para.appendChild(document.createElement("br"));
        para.appendChild(document.createElement("br"));

    }
    const element = document.getElementById("div1");
    document.getElementById("div1").innerHTML = "";
    element.appendChild(para);

}

document.getElementById("frm1").style.display = "block";

function clearInput(){
    var title= document.getElementById("title");
      if (title.value !="") {
        title.value = "";
      }
      var author= document.getElementById("author");
      if (author.value !="") {
        author.value = "";
      }
      var pages= document.getElementById("pages");
      if (pages.value !="") {
        pages.value = "";
      }
      var read= document.getElementById("read");
      if (read.value !="") {
        read.value = "";
      }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read
    displayBooks();
}