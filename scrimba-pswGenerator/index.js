let randLetter = document.getElementById("pwd");
let button = document.getElementById("GenerateEigth");
let buttonTwo = document.getElementById("GenerateTen");
let buttonThree = document.getElementById("GenerateFifteen");
let buttonFour = document.getElementById("GenerateTwenty");

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
  "~",
  "`",
  "!",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function pswSizeEight() {
  button.addEventListener("click", function () {
    let randomLetters = [];

    let copy = letters.slice();
    while (randomLetters.length < 8) {
      let index = Math.floor(Math.random() * copy.length);
      randomLetters.push(copy.splice(index, 1)[0]);
      randLetter.textContent = randomLetters.join("");
    }
  });
}

function pswSizeTen() {
  buttonTwo.addEventListener("click", function () {
    let randomLetters = [];

    let copy = letters.slice();
    while (randomLetters.length < 10) {
      let index = Math.floor(Math.random() * copy.length);
      randomLetters.push(copy.splice(index, 1)[0]);
      randLetter.textContent = randomLetters.join("");
    }
  });
}

function pswSizeFifteen() {
  buttonThree.addEventListener("click", function () {
    let randomLetters = [];

    let copy = letters.slice();
    while (randomLetters.length < 15) {
      let index = Math.floor(Math.random() * copy.length);
      randomLetters.push(copy.splice(index, 1)[0]);
      randLetter.textContent = randomLetters.join("");
    }
  });
}

function pswSizeTwenty() {
  buttonFour.addEventListener("click", function () {
    let randomLetters = [];

    let copy = letters.slice();
    while (randomLetters.length < 20) {
      let index = Math.floor(Math.random() * copy.length);
      randomLetters.push(copy.splice(index, 1)[0]);
      randLetter.textContent = randomLetters.join("");
    }
  });
}
