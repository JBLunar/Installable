// Register the service worker

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./serviceworker.js")
    .then(() => console.log("App: service worker registered"))
    .catch((error) => console.error("Service worker registration failed:", error));
}

const myDogElement = document.getElementById("dog");
if (myDogElement) getDog();

function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      // data.message is the image url
      myDogElement.innerHTML = `<img src="${data.message}" alt="Random dog">`
    })
    .catch(error => {
      console.error("No dog today:", error)
      myDogElement.textContent = "Could not fetch a dog 😢"
    })
}