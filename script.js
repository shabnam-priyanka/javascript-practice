//Add , Replace and remove Elements

let olItem = document.createElement("li");
olItem.className = "a new another";

olItem.id = "myId";

//href title etc attribute
olItem.setAttribute("href", "http://www.google.com");

//=====================Add Content
olItem.appendChild(document.createTextNode("Javascript"));

document.querySelector("ol").appendChild(olItem);

// console.log(olItem);

let ulItem = document.createElement("li");
let link = document.createElement("a");
link.appendChild(document.createTextNode("Instagram"));
link.setAttribute("href", "http://www.instagram.com");
ulItem.appendChild(link);

document.querySelector("ul").appendChild(ulItem);
// console.log("ulItem");

//=====================Element replacement

let newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("This is Javascript"));
newHeading.className = "simple-class";
let oldHeading = document.querySelector("h3");

let parentDiv = document.querySelector(".contain");
parentDiv.replaceChild(newHeading, oldHeading);
console.log(parentDiv);
console.log(oldHeading);
console.log(newHeading);
