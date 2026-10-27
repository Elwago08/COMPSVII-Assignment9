console.log("script.js loaded");
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

let data = fetch("https://api.giphy.com/v1/gifs/search?api_key=dyeaF3ccOQ73tsdVKFliaREuBeojLM3r&q=Dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
console.log(data);

async function getGif() {
  const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=dyeaF3ccOQ73tsdVKFliaREuBeojLM3r&q=Dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
  const data = await response.json();
  const images = data.data[0].images.fixed_height.url
  

  const output = document.getElementById("gif-container"); 
  output.innerHTML = `<img src="${images}" class="col-3 mb-3">`;
}

getGif()