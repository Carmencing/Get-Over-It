//create objects
let object1 = {
  name: "object1",
  score: 34
}

let object2 = {
  name: "object2",
  score: 2
}

//objects array
let results = [object1, object2
];

//sorted results array
let newResults = [];

sort(results);

//sorting function
function sort(results) {
  while (results.length > 0) {
    max = 0;
    for (j = max + 1; j < results.length; j++) {
      if (results[max].score < results[j].score) {
        max = j;
      }
    }
    newResults.push(results[max]);
    results.splice(max, 1);
  }
}
displayResults(newResults);

//function to create list items for rankings
function displayResults(newResults) {
  for (i = 0; i < newResults.length; i++) {
    let newListItem = document.createElement("li");
    newListItem.innerHTML = newResults[i].name;
    document.querySelector(".rankingsList").appendChild(newListItem);
  }
}

let numberOfRatsSlapped = localStorage.getItem("SlappedMice");

document.querySelector("body").insertAdjacentHTML("beforeend", "Rats slapped: " + numberOfRatsSlapped);
