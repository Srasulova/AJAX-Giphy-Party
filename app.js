console.log("Let's get this party started!");

const form = document.querySelector(".searchForm");
const userInput = document.querySelector("#searchInput");
const btnSearch = document.querySelector(".btnSearch");
const giphiesList = document.querySelector(".giphies");
const btnRemove = document.querySelector(".btnRemove");

async function getGiphy() {
  const randomIdx = Math.floor(Math.random() * 50);
  const giphy = await axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${userInput.value
      .toLowerCase()
      .trim()}&api_key=pjJ8e4H2kim2F7FW6qK7fV9KTiJUO6SI`
  );
  console.log(giphy);
  console.log(randomIdx);
  // console.log(giphy.data.data[randomIdx].url);
  return giphy.data.data[randomIdx].images.original.url;
}

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  displayGiphy();
});

btnRemove.addEventListener("click", (e) => {
  e.preventDefault();
  giphiesList.remove();
});

async function displayGiphy() {
  const img = document.createElement("img");
  img.src = await getGiphy();
  img.alt = "giphy";
  console.log(img);
  const listItem = document.createElement("li");
  listItem.append(img);
  giphiesList.append(listItem);
  userInput.value = "";
}

// API key: pjJ8e4H2kim2F7FW6qK7fV9KTiJUO6SI
