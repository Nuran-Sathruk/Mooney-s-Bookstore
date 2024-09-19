function searchBooks() {

let input = document.getElementById('searchBar').value.toLowerCase();

let bookItems = document.getElementsByClassName('book-item');

for (let i = 0; i < bookItems.length; i++) {

let title = bookItems[i].getElementsByTagName('h2')[0].innerText.toLowerCase();

let author = bookItems[i].getElementsByTagName('p')[0].innerText.toLowerCase();

let genre = bookItems[i].getElementsByTagName('p')[1].innerText.toLowerCase();

if (title.includes(input) || author.includes(input) || genre.includes(input)) {
    bookItems[i].style.display = "";

} else {
    bookItems[i].style.display = "none";

}

}

}