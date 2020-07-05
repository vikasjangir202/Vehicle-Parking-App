//Selectors
const vname = document.querySelector(".v-name");
const price = document.querySelector(".price");
const list = document.querySelector(".list");
const add = document.getElementById("add");
const clear = document.getElementById("clear");
const error = document.getElementById("error");
let totalNum = "";
let totalAmount = 0;
let eg = 0;

//Event Listeners
add.addEventListener("click", added);
clear.addEventListener("click", remove);
list.addEventListener("click", removeli);

//functions
function added(Event) {
  //prevent form from submitting
  event.preventDefault();
  //check if the input fields are empty or not

  if (vname.value.length == 0 || price.value.length == 0) {
    error.innerText = "*Please enter vehicle name & price";
  } else {
    //create list div
    const listDiv = document.createElement("div");
    listDiv.classList.add("listclass");

    //create LI 1
    const listLi1 = document.createElement("li");
    listLi1.innerText = vname.value;
    listLi1.classList.add("listli");
    listDiv.appendChild(listLi1);
    //Listli 2
    const listLi2 = document.createElement("li");
    listLi2.innerText = price.value;
    listLi2.classList.add("listLi1");
    listDiv.appendChild(listLi2);

    //create remove button
    const removebt = document.createElement("button");
    removebt.innerText = "Remove";
    removebt.classList.add("removebt");
    listDiv.appendChild(removebt);

    //append to ul
    list.appendChild(listDiv);

    //remove value from input box
    vname.value = "";
    price.value = "";

    //remove the error message
    error.innerText = "";
  }
}
function remove(e) {
  const alllist = document.querySelectorAll(".listclass");
  for (let i = 0; i < alllist.length; i++) {
    alllist[i].remove();
  }
}
function removeli(e) {
  const item = e.target;
  //delete li div
  if (item.classList[0] === "removebt") {
    const rm = item.parentElement;
    rm.remove();
  }
}

//heading animation
const head = document.querySelector(".heading");
const strText = head.textContent;
const splitText = strText.split("");
head.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  let char = splitText[i] === " " ? "&nbsp;" : splitText[i];
  head.innerHTML += "<span>" + char + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = head.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}
function complete() {
  clearInterval(timer);
  timer = null;
}
