console.log("Let's get this party started!");

const form = document.querySelector(".searchForm");
const userInput = document.querySelector("#searchInput");
const btnSearch = document.querySelector(".btnSearch");
const giphiesList = document.querySelector(".giphies");

//   console.log(giphies);
//   console.log(giphies.data.data);
// console.log(giphyURL.embed_url);
// console.log(giphyURL.url);

async function getGiphy() {
  const giphies = await axios.get(
    "http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  );
  giphiesData = giphies.data.data;
  for (let giphyURL of giphiesData) {
    console.log(giphyURL.url);
    const newUrl = document.createElement("li");
    newUrl.innerText = giphyURL.url;
    giphiesList.append(newUrl);
  }
}

// console.log(getGiphy());

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getGiphy();
});
