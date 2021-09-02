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
    // clear search text
    searchInput.value = '';
    // clear previous content
    booksContainer.innerHTML = '';
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
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                
                <div class="card-body">
                    <h3 class="card-title"><span class="border-bottom-3">Book Name</span> : ${book.title}</h3>
                    <h6>Author Name : ${book.author_name ? book.author_name[0] : ''}</h6>
                    <p class="card-text">First Publish : ${book.first_publish_year ? book.first_publish_year : ''}</p>
                </div>
            </div>
        `;
        booksContainer.appendChild(div)
    })
    totalResult.innerHTML = `
        <h2 class="text-center text-danger my-5">Total Books Result : ${books.length}<h2/>
    `
}


// <div class="card-footer">
// <small class="text-muted">Last updated 3 mins ago</small>
// </div> 



{/* <img src="https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i : ''}-M.jpg" class="card-img-top" alt="cover-image"></img> */ }