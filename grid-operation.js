var numbers = [
  {
    value: 1,
    color: "#6F98A8",
  },
  {
    value: 2,
    color: "#2B8EAD",
  },
  {
    value: 3,
    color: "#2F454E",
  },
  {
    value: 4,
    color: "#2B8EAD",
  },
  {
    value: 5,
    color: "#2F454E",
  },
  {
    value: 6,
    color: "#bfbfbf",
  },
  {
    value: 7,
    color: "#bfbfbf",
  },
  {
    value: 8,
    color: "#6F98A8",
  },
  {
    value: 9,
    color: "#2F454E",
  },
];

init();

function init() {
  disableSortButton(true);

  removeAllChildrenNodes();
  renderNumbers(numbers);
}

function randomize() {
  disableSortButton(false);
  var randomNumbers = randomArrayShuffle();
  createNumberGrid(randomNumbers);
}

function disableSortButton(status) {
  document.getElementById("sort-button").disabled = status;
}

function randomArrayShuffle() {
  var currentIndex = numbers.length,
    temporaryValue,
    randomIndex;
  let randomOrderArray = [...numbers];

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = randomOrderArray[currentIndex];
    randomOrderArray[currentIndex] = randomOrderArray[randomIndex];
    randomOrderArray[randomIndex] = temporaryValue;
  }
  return randomOrderArray;
}
function createNumberGrid(randomNumbers) {
  removeAllChildrenNodes();
  renderNumbers(randomNumbers);
}

function renderNumbers(randomNumbers) {
  randomNumbers.map((val) => {
    let div = document.createElement("div");
    let colorBand =  document.createElement("div");
    
    colorBand.className = "colorband";
    colorBand.style.background = val.color;

    div.className = "item";
    div.innerHTML = val.value;
    div.style.background = val.color;
    document.getElementById("number-layout").appendChild(colorBand).appendChild(div);
  });
}

function removeAllChildrenNodes() {
  var list = document.getElementById("number-layout");
  while (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  }
}
