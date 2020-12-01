document.getElementById("add_btn").addEventListener("submit", formFunc);

function formFunc(e) {
  //prevent default and keep it from refreshing on submit.
  e.preventDefault();

  //create variable for each input from the form value.
  //   let destName = document.getElementById("destination").value;
  //   let destLocation = document.getElementById("location").value;
  //   let destImg = document.getElementById("img").value;
  //   let destDescription = document.getElementById("description").value;

  //   console.log(destName + destLocation + destImg + destDescription);
  let destName = e.target.elements["destination"].value;
  let destLocation = e.target.elements["location"].value;
  let destImg = e.target.elements["img"].value;
  let destDescription = e.target.elements["description"].value;

  let allElementsContainer = destCard(
    destName,
    destDescription,
    destImg,
    destLocation
  );

  let cardContainer = document.querySelector(".destination_card");

  //   if (!cardContainer.contains(child)) {
  //     document.querySelector(".title").innerHTML = "My Wishlist";
  //   }
  if (cardContainer.children.length === 0) {
    document.querySelector("#title").innerHTML = "My WishList";
  }
  cardContainer.appendChild(allElementsContainer);
}

//create function for the card
function destCard(destination, location, img, description) {
  var card = document.createElement("div");
  card.setAttribute("class", "card");
  card.style.width = "15rem";
  card.style.height = "fit-content";
  card.style.margin = "20px;";

  //create and set attributes for the image in the card.

  let imgUrl = document.createElement("img");
  imgUrl.setAttribute("class", "card-img-top");
  imgUrl.setAttribute("src", destination);

  let defaultImg =
    "https://www.signpac.com.au/wp-content/uploads/2017/06/shutterstock_133828637.jpg";
  if (img.length === 0) {
    imgUrl.setAttribute("src", defaultImg);
  } else {
    imgUrl.setAttribute("src", img);
  }
  card.appendChild(imgUrl);

  // Create and set attributes for the text in the card
  document.createElement("div").setAttribute("class", "card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "title");
  cardTitle.innerText = destination;
  cardBody.appendChild(cardTitle);

  let cardSubtitle = document.createElement("h6");
  cardSubtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
  cardSubtitle.innerText = location;
  cardBody.appendChild(cardSubtitle);

  if (description.length !== 0) {
    let cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerText = description;
    cardBody.appendChild(cardText);
  }

  var buttonsContainer = document.createElement("div");
  buttonsContainer.setAttribute("class", "buttons_container");

  var cardEditBtn = document.createElement("button");
  cardEditBtn.setAttribute("class", "btn btn-warning");
  cardEditBtn.innerText = "Edit";
  cardEditBtn.addEventListener("click", editDestination);

  var cardDeleteBtn = document.createElement("button");
  cardDeleteBtn.setAttribute("class", "btn btn-danger");
  cardDeleteBtn.innerText = "Remove";
  cardDeleteBtn.addEventListener("click", removeDestination);

  buttonsContainer.appendChild(cardEditBtn);
  buttonsContainer.appendChild(cardDeleteBtn);
  ardBody.appendChild(buttonsContainer);

  card.appendChild(cardBody);

  return card;
}

function removeDestination(e) {
  var cardBody = e.target.parentElement.parentElement;
  var card = cardBody.parentElement;
  card.remove();
}
