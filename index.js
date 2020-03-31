function getDogPicture() {
  const dogBreed = document.getElementById("breed").value;
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === "error") {
        alert(responseJson.message);
      } else {
        displayResults(responseJson);
        alert("You know your breeds, here is a cute picture");
      }
    })
    .catch(error => alert("Something went wrong"));
}

function displayResults(responseJson) {
  const imageUrls = responseJson.message;
  $(".results-img").replaceWith(`<img src="${imageUrls}" class="results-img">`);
  $(".results").removeClass("hidden");
}

function handleForm() {
  $("form").submit(event => {
    event.preventDefault();
    getDogPicture();
  });
}

$(function() {
  console.log("App Loaded");
  handleForm();
});
