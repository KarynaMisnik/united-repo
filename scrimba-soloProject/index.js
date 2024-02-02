let HomeResult = document.getElementById("HomeResult");
let HomeScore = 0;
let GuestResult = document.getElementById("GuestResult");
let GuestScore = 0;

setInterval(function () {
  let n1 = parseInt(HomeResult.textContent);
  let n2 = parseInt(GuestResult.textContent);

  if (n1 > n2) {
    HomeResult.classList.add("highlight");
    GuestResult.classList.remove("highlight");
  } else if (n1 < n2) {
    HomeResult.classList.remove("highlight");
    GuestResult.classList.add("highlight");
  } else {
    HomeResult.classList.remove("highlight");
    GuestResult.classList.remove("highlight");
  }
}, 1000);

function homePlusOne() {
  HomeScore = HomeScore + 1;
  HomeResult.innerText = HomeScore;
}

function homePlusTwo() {
  HomeScore = HomeScore + 2;
  HomeResult.innerText = HomeScore;
}

function homePlusThree() {
  HomeScore = HomeScore + 3;
  HomeResult.innerText = HomeScore;
}

function guestPlusOne() {
  GuestScore = GuestScore + 1;
  GuestResult.innerText = GuestScore;
}

function guestPlusTwo() {
  GuestScore = GuestScore + 2;
  GuestResult.innerText = GuestScore;
}

function guestPlusThree() {
  GuestScore = GuestScore + 3;
  GuestResult.innerText = GuestScore;
}

function resetHomeScore() {
  HomeResult.innerText = 0;
  HomeScore = 0;
}

function resetGuestScore() {
  GuestResult.innerText = 0;
  GuestScore = 0;
}
