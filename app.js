console.log("Let's get this party started!");

async function getGiphy() {
const giphies = await axios.get("http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym")
console.log(giphies)
console.log(giphies.data.data[0].embed_url)
}

