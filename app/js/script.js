const bookmarkEl = document.querySelector(".bookmark");
const radioEl = document.querySelectorAll('[type="radio"]');
const labelEl = document.querySelectorAll(".reward-label");
const card = document.querySelectorAll("form > div");
const indexesOfButtonsNotClicked = [];

const dollarEl = document.querySelector(".test");
const pledgeEl = document.querySelector(".pledge-input");

const paymentEl = document.querySelectorAll(".payment");

const popupCard = document.querySelector(".back-project-popup");
const transparentBg = document.querySelector(".transparent-background");
const closePopup = document.querySelector(".close-popup");
const openPopup = document.querySelector(".button");
const selectReward = document.querySelectorAll(".open-popup-with-option");

let clicked = [false, false, false, false];
let bookmarked = false;

function getDocHeight() {
  let D = document;
  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight
  );
}

function amountscrolled() {
  let winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  let docheight = getDocHeight();
  let scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  let trackLength = docheight - winheight;
  return scrollTop - trackLength;
}

window.addEventListener(
  "scroll",
  function () {
    amountscrolled();
  },
  false
);

dollarEl.addEventListener("click", function () {
  pledgeEl.focus();
});

closePopup.addEventListener("click", function () {
  popupCard.classList.add("close");
  transparentBg.classList.add("close");
});

openPopup.addEventListener("click", function () {
  const newHeigt = amountscrolled() + 1830;
  popupCard.style.top = `${newHeigt}px`;
  popupCard.classList.remove("close");
  transparentBg.classList.remove("close");
});

for (let i = 0; i < selectReward.length; i++) {
  selectReward[i].addEventListener("click", function () {
    for (let j = 0; j < clicked.length; j++) {
      card[j].classList.remove("card-selected");
      paymentEl[j].classList.add("payment");
      radioEl[j].checked = false;
    }

    const otherHeight = amountscrolled() + 1500;
    popupCard.style.top = `${otherHeight}px`;
    popupCard.classList.remove("close");
    transparentBg.classList.remove("close");
    card[i + 1].classList.add("card-selected");
    paymentEl[i + 1].classList.remove("payment");
    radioEl[i + 1].checked = true;
  });
}

for (let i = 0; i < radioEl.length; i++) {
  radioEl[i].addEventListener("mouseover", function () {
    labelEl[i].classList.add("radio-button-hovered");
  });

  radioEl[i].addEventListener("mouseout", function () {
    labelEl[i].classList.remove("radio-button-hovered");
  });

  radioEl[i].addEventListener("click", function () {
    clicked[i] === true;
    // finds the index of the buttons that aren't clicked
    for (let index = 0; index < clicked.length; index++) {
      if (clicked[index] === false) {
        indexesOfButtonsNotClicked.push(index);
      }
    }
    // removes the cyan color from the labels that haven't been clicked
    for (let j = 0; j < clicked.length; j++) {
      labelEl[j].classList.remove("radio-button-clicked");
      paymentEl[j].classList.add("payment");
      card[j].classList.remove("card-selected");
    }
    // adds the cyan color to the label that has been clicked
    labelEl[i].classList.add("radio-button-clicked");
    paymentEl[i].classList.remove("payment");
    card[i].classList.add("card-selected");
  });
}

bookmarkEl.addEventListener("click", function () {
  if (bookmarked === false) {
    bookmarked = true;
    bookmarkEl.classList.add("bookmarked");
    bookmarkEl.innerHTML = `<img src="images/icon-bookmarked.svg" alt="" />
   Bookmarked`;
    bookmarkme();
  } else {
    bookmarkEl.classList.remove("bookmarked");
    bookmarkEl.innerHTML = `<img src="images/icon-bookmark.svg" alt="" />
   Bookmark`;
    bookmarked = false;
  }
});

function bookmarkme() {
  alert(
    "Press " +
      (navigator.userAgent.toLowerCase().indexOf("mac") != -1
        ? "Command/Cmd"
        : "CTRL") +
      " + D to bookmark this page."
  );
}
