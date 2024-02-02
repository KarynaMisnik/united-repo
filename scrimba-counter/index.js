let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let categoryStr = document.getElementById("category").value;
  alert(categoryStr);
  let countStr = count + " - ";
  saveEl.textContent += countStr + " " + categoryStr + " ";
  countEl.textContent = 0;
  count = 0;
}
