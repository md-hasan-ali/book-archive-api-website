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
        totalResult.innerHTML = '';
        booksContainer.innerHTML = '';
        errorDiv.innerText = "Search field cannot be empty.";
        return;
    } else {
        errorDiv.innerText = '';
    }
    // clear search text
    searchInput.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data.docs))
}
// show data and call function
const showData = books => {
    // Error Handleing
    if (books.length === 0) {
        errorDiv.innerText = 'No Result Found..!'
    } else {
        errorDiv.innerText = '';
    }
    // clear previous content
    booksContainer.innerHTML = '';
    // Show Total Result
    totalResult.innerHTML = `
      <h2 class="text-center text-danger my-5">Total Books Result : ${books.length}<h2/>
    `
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img height="350" src="https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i : ''}-M.jpg" class="card-img-top" alt="cover-image"></img>
                <div class="card-body">
                    <h3 class="card-title mb-3">Book Name : ${book.title}</h3>
                    <h6>Author Name : ${book.author_name ? book.author_name[0] : ''}</h6>
                    <p class="card-text">First Publish : ${book.first_publish_year ? book.first_publish_year : ''}</p>
                    <p class="card-text">Publisher : ${book.publisher ? book.publisher[0] : ''}</p>
                </div>
            </div>
        `;
        booksContainer.appendChild(div)
    })

}