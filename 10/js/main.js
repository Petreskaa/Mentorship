//animal data
let animalData = [
  ["Lion", "./img/lion.jpg", "4"],
  ["Australian pelican", "./img/pelican.jpg", "5"],
  ["Campo flicker", "./img/flicker.jpg", "4"],
  ["Deer, Rein", "./img/deer.jpg", "5"],
  ["Panda, John", "./img/panda.jpg", "6"],
  ["Owl, Charlie", "./img/owl.jpg", "6"],
  ["Red-tailed phascogale", "./img/zebra.jpg", "7"],
  ["Greylag goose", "./img/goose.jpg", "7"],
  ["Cat, toddy", "./img/cat.jpg", "7"],
  ["Hippopotamus", "./img/hippo.jpg", "5"],
];

let boxesWrapper = document.querySelector(".boxes-wrapper");

//Exercise I: create a function which returns a fully-created animal-box (see screenshot how they look like). Create the needed html elements inside the function and return the box (col-md-3), similar like we did last time with the table-row. One animal box should have:
// 1. name (h2)
// 2. image (img)
// 3. age (p)
function createBox(text, src, age) {
  let col = document.createElement("div");
  let inner = document.createElement("div");
  let name = document.createElement("h2");
  let img = document.createElement("img");
  let ageCont = document.createElement("p");

  col.setAttribute("class", "col-6 col-md-3 text-center mb-4");
  inner.setAttribute("class", "border h-100 p-2");
  name.innerText = text;
  name.setAttribute("class", "h4 mt-3");
  img.src = src;
  img.setAttribute("style", "max-width: 100%;");
  ageCont.innerText = "age - " + age;

  inner.appendChild(img);
  inner.appendChild(name);
  inner.appendChild(ageCont);
  col.appendChild(inner);

  return col;
}

// Exercise I
//iterate through the animalData and create the cards
animalData.forEach((el) => {
  let box = createBox(el[0], el[1], el[2]);

  boxesWrapper.appendChild(box);
});

// Exercise 2 - remove all animal trigger
let removeAllTrigger = document.querySelector("#remove-all");

removeAllTrigger.addEventListener("click", () => {
  boxesWrapper.innerHTML = "";

  animalData = [];

  console.log(animalData);
});

// Exercise 3 - add animal triger
let addAnimalTrigger = document.querySelector("#add-animal");

addAnimalTrigger.addEventListener("click", () => {
  let animalName = document.querySelector("#animal-name").value,
    animalImg = document.querySelector("#animal-img").value,
    animalAge = document.querySelector("#animal-age").value;

  if (animalName && animalImg && animalAge) {
    let newAnimal = [animalName, animalImg, animalAge];

    animalData.push(newAnimal);

    boxesWrapper.innerHTML = "";

    animalData.forEach((el) => {
      let box = createBox(el[0], el[1], el[2]);

      boxesWrapper.appendChild(box);
    });

    document.querySelector("#animal-name").value = "";
    document.querySelector("#animal-img").value = "";
    document.querySelector("#animal-age").value = "";
  }
});

// Exercise 4 - filter animal by age
let filterTriggers = document.querySelectorAll(".filters .btn");

filterTriggers.forEach((el) => {
  el.addEventListener("click", () => {
    let currentFilter = el.getAttribute("data-age");

    console.log(currentFilter);

    boxesWrapper.innerHTML = "";

    if (currentFilter === "all") {
      animalData.forEach((el) => {
        let box = createBox(el[0], el[1], el[2]);

        boxesWrapper.appendChild(box);
      });
    } else {
      let filteredAnimals = animalData.filter((el) => el[2] === currentFilter);
      console.log(filteredAnimals);

      filteredAnimals.forEach((el) => {
        let box = createBox(el[0], el[1], el[2]);

        boxesWrapper.appendChild(box);
      });
    }
  });
});
