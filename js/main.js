// Get All id 
const searchInput = document.getElementById('search-input');
const booksContainer = document.getElementById('search-details');
const totalResult = document.getElementById('show-total');
const errorDiv = document.getElementById('error');

// Search Function add 
const searchButton = () => {
    const searchText = searchInput.value;
    // error handleing
    if (searchText === "") {
        errorDiv.innerText = "Search field cannot be empty.";
        return;
    }
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data.docs))
}
// show data and call function
const showData = books => {
    console.log(books);
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
            <div class="book-item p-4 shadow rounded">
                <h2>Book Name : ${book.title}</h2>
                <h4>Author Name : ${book.author_name ? book.author_name[0] : ''}</h4>
                <p>First Publish : ${book.first_publish_year}</p>
            </div>
        `;
        booksContainer.appendChild(div)
    })
    totalResult.innerHTML = `
        <h2 class="text-center text-danger my-5">Total Books Result : ${books.length}<h2/>
    `
}