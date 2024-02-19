/*Unsplash API key*/
const accessKey = "3JEpm__R_Kr_LYDAooaOxt7zEKLf0PW1Qib7VHl8Pkk";

/*Init const from elements by ID*/
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

/*Init keyword value with blank and page to 1*/
let keyword = "";
let page = 1 ;

/*Search image function*/
async function searchImages() {
    /*Retrieve search value*/
    keyword = searchBox.value;
    /*API endpoint with parameters*/
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    /*Await json response*/
    const response = await fetch(url);
    const data = await response.json();

    /*Clear search input after loading data*/
    if(page === 1){
        searchResult.innerHTML = "";
    }

    /*Display images*/
    const results = data.results;
    results.map((result) => {

        /*Create images and links elements*/
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        /*Open links in another tab when clicked*/
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    /*Display show more button when data displayed*/
    showMoreBtn.style.display = "block";
}

/*Call searchImages function on click search button*/
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

/*Call searchImages function on click show more button*/
showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})