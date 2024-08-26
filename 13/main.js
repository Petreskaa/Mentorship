let addToQueBtn = document.querySelector("#addToQue");
let queTable = document.querySelector("#queList");
let queList = [];
let queCount = 1;

let addGuestBtn = document.querySelector("#addGuest");
let guestTable = document.querySelector("#guestList");
let guestList = [];
let guestLimit = 15;

// Helper function
function getRandomInt(min, max) {
  min = min || 14;
  max = max || 50;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Que {
  constructor(_number) {
    this.name = "Que " + _number;
    this.age = getRandomInt();
  }

  isAdult() {
    return this.age >= 18;
  }
}

class Guest {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
    this.isInEditMode = false;
  }
}

let onAddToQue = function () {
  let myQue = new Que(queCount);
  let tr = document.createElement("tr");

  let tdName = document.createElement("td");
  tdName.innerText = myQue.name;
  tr.appendChild(tdName);

  let tdAge = document.createElement("td");
  tdAge.innerText = myQue.age;
  tr.appendChild(tdAge);

  let tdActions = document.createElement("td");
  tr.appendChild(tdActions);

  let btnDecline = document.createElement("button");
  btnDecline.innerText = "Decline";
  btnDecline.classList.add("btn", "btn-sm", "btn-outline-danger", "mr-1");
  tdActions.appendChild(btnDecline);

  btnDecline.addEventListener("click", onDeclineFromQue);

  if (myQue.isAdult()) {
    let btnAccept = document.createElement("button");
    btnAccept.innerText = "Accept";
    btnAccept.classList.add("btn", "btn-sm", "btn-outline-success");
    tdActions.appendChild(btnAccept);

    btnAccept.addEventListener("click", function (e) {
      onAcceptFromQue(e, myQue);
    });
  }

  queTable.querySelector("tbody").appendChild(tr);

  queList.push(myQue);
  queCount++;
};

// Remove from Que list
let onDeclineFromQue = function (e) {
  let tr = e.currentTarget.parentNode.parentNode;
  let index = tr.rowIndex;

  queList.splice(index - 1, 1);
  tr.remove();
  console.log(queList);
};

// Accept from Que list

let onAcceptFromQue = function (e, guest) {
  if (guestList.length >= guestLimit) {
    alert("Sorry we are full, come back another night");
    return;
  }

  e.currentTarget.parentNode.parentNode.remove();

  let newGuest = new Guest(guest.name, guest.age);
  guestList.push(newGuest);

  let tr = document.createElement("tr");

  let tdName = document.createElement("td");
  tdName.innerText = newGuest.name;
  tr.appendChild(tdName);

  let tdAge = document.createElement("td");
  tdAge.innerText = newGuest.age;
  tr.appendChild(tdAge);

  let tdActions = document.createElement("td");
  let editGuestBtn = document.createElement("button");
  editGuestBtn.innerText = "Edit";
  editGuestBtn.classList.add("btn", "btn-outline-info", "btn-sm");
  tdActions.appendChild(editGuestBtn);
  tr.appendChild(tdActions);

  editGuestBtn.addEventListener("click", onGuestEdit);

  guestTable.querySelector("tbody").appendChild(tr);
};

let onGuestEdit = function (e) {
  let tr = e.currentTarget.parentNode.parentNode;
  let editButton = e.currentTarget;
  let index = tr.rowIndex;
  let tdName = tr.querySelectorAll("td")[0];

  let nameInput = document.createElement("input");
  nameInput.classList.add("form-control-sm", "form-control");
  nameInput.value = tdName.innerText;

  let currentGuest = guestList[index - 1];

  if (currentGuest.isInEditMode) {
    let nameValue = e.currentTarget.parentNode.parentNode.querySelector("input").value;
    tdName.innerHTML = nameValue;
    currentGuest.name = nameValue;
    editButton.innerText = "Edit";

    currentGuest.isInEditMode = false;
  } else {
    tdName.innerHTML = "";
    tdName.appendChild(nameInput);
    editButton.innerText = "Save";
    currentGuest.isInEditMode = true;
  }
};

addToQueBtn.addEventListener("click", onAddToQue);
