console.log("Let's get this party started!");

const form = document.querySelector(".searchForm");
const userInput = document.querySelector("#searchInput");
const btnSearch = document.querySelector(".btnSearch");
const giphiesList = document.querySelector(".giphies");

async function getGiphy() {
  const randomIdx = Math.floor(Math.random() * 50);
  const giphy = await axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${userInput.value}&api_key=pjJ8e4H2kim2F7FW6qK7fV9KTiJUO6SI`
  );
  console.log(giphy);
  console.log(randomIdx);
  // console.log(giphy.data.data[randomIdx].url);
  return giphy.data.data[randomIdx].images.original.url;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayGiphy();
});

async function displayGiphy() {
  const img = document.createElement("img");
  img.src = await getGiphy();
  img.alt = "giphy";
  console.log(img);
  const listItem = document.createElement("li");
  listItem.append(img);
  giphiesList.append(listItem);
}

// API key: pjJ8e4H2kim2F7FW6qK7fV9KTiJUO6SI
