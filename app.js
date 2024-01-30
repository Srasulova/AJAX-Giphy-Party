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
  const randomIdx = Math.floor(Math.random() * 50);
  const giphy = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${userInput.value}&api_key=pjJ8e4H2kim2F7FW6qK7fV9KTiJUO6SI`
  );
  console.log(giphy);
  console.log(randomIdx);
  console.log(giphy.data.data[randomIdx].url);
  return giphy.data.data[randomIdx].url;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getGiphy();
});

// API key: pjJ8e4H2kim2F7FW6qK7fV9KTiJUO6SI
