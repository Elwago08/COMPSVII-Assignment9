console.log("script.js loaded");
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=Spml3AS7zs8p421tq5X2TXFtZ2JXMxxs&q=Dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

let data = fetch("https://api.giphy.com/v1/gifs/search?api_key=Spml3AS7zs8p421tq5X2TXFtZ2JXMxxs&q=Dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
console.log(data);

async function getGif() {
  const response = await fetch(endpoint);
  const data = await response.json();
  const images = [];
  images.push(data.data[0].images.fixed_height.url);

  const output = document.querySelector("#gif-container"); 
  const btn = document.querySelector("#fetch-gif-btn");
  output.innerHTML = `<img src="${images}" class="col-3 mb-3">`;

  btn.addEventListener("click", async function () { 
    for(let i = 0; i < images.length; i++) {
        output.innerHTML += `<img src="${images}" class="col-3 mb-3">`;
    } 
});
}


getGif();

