let js = document.createElement("li");
js.className = "who u";
js.id = "tumi";

js.setAttribute("http", "www.google.com");

js.appendChild(
  document.createTextNode("focus is the main cause of perfection")
);

document.querySelector("ol").appendChild(js);
// console.log(js);
//creating element li then anchor tag

let itemA = document.createElement("li");
let itemB = document.createElement("a");
itemA.className = "pionieer";
itemB.className = "jalani";

itemB.setAttribute("http", "www.google.com");
itemB.appendChild(document.createTextNode("I need lots of practice re "));
itemA.appendChild(itemB);

document.querySelector("ul").appendChild(itemA);
console.log(itemA);

//replace element
let newHeading = document.createElement("h1");
newHeading.className = "tor ki";
newHeading.appendChild(document.createTextNode("I am New heading"));
let oldHeading = document.querySelector("h3");
let parentDiv = document.querySelector(".contain");
parentDiv.replaceChild(newHeading, oldHeading);
console.log(newHeading);

// remove item

let removeItem = document.querySelectorAll("li");
removeItem[0].remove();
console.log(removeItem);

//now remove item from specific tag
