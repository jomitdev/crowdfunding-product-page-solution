const bookmarkEl = document.querySelector(".bookmark");
const bookmarkMobileEl = document.querySelector(".bookmark-mobile");

const radioEl = document.querySelectorAll('[type="radio"]');
const labelEl = document.querySelectorAll(".reward-label");
const card = document.querySelectorAll("form > .card");
const indexesOfButtonsNotClicked = [];

const dollarEl = document.querySelectorAll(".test");
const pledgeEl = document.querySelectorAll(".pledge-input");

const paymentEl = document.querySelectorAll(".payment");

const popupCard = document.querySelector(".back-project-popup");
const transparentBg = document.querySelector(".transparent-background");
const closePopup = document.querySelectorAll(".close-popup");
const openPopup = document.querySelector(".button");
const selectReward = document.querySelectorAll(".open-popup-with-option");

const submitPledges = document.querySelectorAll("[type='button']");
const moneyBackedEl = document.querySelector("#money");
const totalBackersEl = document.querySelector("#backers");
const bambooStandsLeftEl = document.querySelectorAll(".bamboo");
const blackStandsLeftEl = document.querySelectorAll(".black");
const mahoganysLeftEl = document.querySelectorAll(".mahogany");

const barEl = document.querySelector(".inner-bar");

const modalCompletedEl = document.querySelector(".modal-completed");
const closeModalEl = document.querySelector(".close-modal");

const mobileMenuEl = document.querySelector(".options-container");
const mobileMenuButton = document.querySelector(".hamburger");

let valid = false;
let opened = false;

const aboutCard = document.querySelectorAll(".about > .card");

let clicked = [false, false, false, false];
let bookmarked = false;
let moneyBacked = 89914;
let moneyBackedWithCommas = 0;
let totalBackers = 5007;
let totalBackersWithCommas = 0;
let bambooStandsLeft = 101;
let blackStandsLeft = 64;
let mahoganysLeft = 0;

let selectRewardArray = [bambooStandsLeft, blackStandsLeft, mahoganysLeft];
let selectRewardArrayForPopup = [
  0,
  bambooStandsLeft,
  blackStandsLeft,
  mahoganysLeft,
];

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

barEl.style.width = `${(money / 100000) * 100}%`;

function calcBar(money) {
  let percentage = (money / 100000) * 100;
  if (percentage <= 100) {
    barEl.style.width = `${percentage}%`;
  } else {
    barEl.style.width = "100%";
  }
}

for (let i = 0; i < selectRewardArray.length; i++) {
  if (selectRewardArray[i] === 0) {
    radioEl[i + 1].classList.remove("radio");
    labelEl[i + 1].classList.remove("reward-label");
  }
}

mobileMenuButton.addEventListener("click", () => {
  if (opened === false) {
    mobileMenuButton.classList.toggle("active");
    mobileMenuEl.classList.toggle("active");
    transparentBg.classList.toggle("close");
    document.querySelector("body").style.height = "100%";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("html").style.height = "100%";
    document.querySelector("html").style.overflow = "hidden";
    opened = true;
  } else {
    mobileMenuButton.classList.toggle("active");
    mobileMenuEl.classList.toggle("active");
    transparentBg.classList.toggle("close");
    document.querySelector("body").style.height = "";
    document.querySelector("body").style.overflow = "";
    document.querySelector("html").style.height = "";
    document.querySelector("html").style.overflow = "";
    opened = false;
  }
});

closeModalEl.addEventListener("click", function () {
  modalCompletedEl.classList.toggle("close");
  transparentBg.classList.toggle("close");
});

function checkInput(amountGiven, minAmount) {
  const amount = amountGiven.value;
  if (amount <= 0) {
    alert("The amount cannot be less than 0");
  } else if (amount < minAmount) {
    alert(
      `The minimum pledge amount for this option is $${minAmount}. You entered $${amount}.`
    );
  } else if (amount >= minAmount) {
    valid = true;
    moneyBacked = Number(moneyBacked);
    moneyBacked += Number(amount);
    calcBar(moneyBacked);
    moneyBackedWithCommas = moneyBacked;
    moneyBackedWithCommas = numberWithCommas(moneyBackedWithCommas).toString();
    totalBackers += 1;
    totalBackersWithCommas = totalBackers;
    totalBackersWithCommas = numberWithCommas(
      totalBackersWithCommas
    ).toString();
    moneyBackedEl.innerText = `$${moneyBackedWithCommas}`;
    totalBackersEl.innerText = totalBackersWithCommas;

    let modalHeight = amountscrolled() + 300;
    modalCompletedEl.style.top = `${modalHeight}px`;

    modalCompletedEl.classList.toggle("close");
    popupCard.classList.toggle("close");
  }
}

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
  let scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;

  return scrollTop;
}

submitPledges[0].addEventListener("click", function () {
  checkInput(pledgeEl[0], 0.1);
});
submitPledges[1].addEventListener("click", function () {
  checkInput(pledgeEl[1], 25);
  if (bambooStandsLeft > 0 && valid) {
    bambooStandsLeft -= 1;
    for (let i = 0; i < bambooStandsLeftEl.length; i++) {
      bambooStandsLeftEl[i].innerText = bambooStandsLeft;
    }
  }

  if (bambooStandsLeft === 0) {
    submitPledges[1].classList.remove("button-smaller");
    submitPledges[1].classList.add("button-gray");
    submitPledges[1].innerHTML = "Out of stock";
    card[1].classList.add("gray");
    selectReward[0].classList.remove("button-smaller");
    selectReward[0].classList.add("button-gray");
    selectReward[0].innerHTML = "Out of stock";
    aboutCard[0].classList.add("gray");
  }
});
submitPledges[2].addEventListener("click", function () {
  checkInput(pledgeEl[2], 75);
  if (blackStandsLeft > 0 && valid) {
    blackStandsLeft -= 1;
    for (let i = 0; i < blackStandsLeftEl.length; i++) {
      blackStandsLeftEl[i].innerText = blackStandsLeft;
    }
  }

  if (blackStandsLeft === 0) {
    submitPledges[2].classList.remove("button-smaller");
    submitPledges[2].classList.add("button-gray");
    submitPledges[2].innerHTML = "Out of stock";
    card[2].classList.add("gray");
    selectReward[1].classList.remove("button-smaller");
    selectReward[1].classList.add("button-gray");
    selectReward[1].innerHTML = "Out of stock";
    aboutCard[1].classList.add("gray");
  }
});
submitPledges[3].addEventListener("click", function () {
  checkInput(pledgeEl[3], 200);
  if (mahoganysLeft > 0 && valid) {
    mahoganysLeft -= 1;
    for (let i = 0; i < mahoganysLeftEl.length; i++) {
      mahoganysLeftEl[i].innerText = mahoganysLeft;
    }
  }

  if (mahoganysLeft === 0) {
    submitPledges[3].classList.remove("button-smaller");
    submitPledges[3].classList.add("button-gray");
    submitPledges[3].innerHTML = "Out of stock";
    card[3].classList.add("gray");
    selectReward[2].classList.remove("button-smaller");
    selectReward[2].classList.add("button-gray");
    selectReward[2].innerHTML = "Out of stock";
    aboutCard[2].classList.add("gray");
  }
});

for (let i = 0; i < dollarEl.length; i++) {
  dollarEl[i].addEventListener("click", function () {
    pledgeEl[i].focus();
  });
}

for (let i = 0; i < closePopup.length; i++) {
  closePopup[i].addEventListener("click", function () {
    popupCard.classList.add("close");
    transparentBg.classList.add("close");
  });
}

openPopup.addEventListener("click", function () {
  const newHeigt = amountscrolled() + 250;
  console.log(newHeigt);
  popupCard.style.top = `${newHeigt}px`;
  popupCard.classList.remove("close");
  transparentBg.classList.remove("close");
});

for (let i = 0; i < selectReward.length; i++) {
  if (selectRewardArray[i] === 0) {
    selectReward[i].classList.remove("button-smaller");
    selectReward[i].classList.add("button-gray");
    selectReward[i].innerHTML = "Out of stock";
    aboutCard[i].classList.add("gray");
    card[i + 1].classList.add("gray");
  }
}

for (let i = 0; i < selectReward.length; i++) {
  selectReward[i].addEventListener("click", function () {
    selectRewardArray = [bambooStandsLeft, blackStandsLeft, mahoganysLeft];
    if (selectRewardArray[i] > 0) {
      for (let j = 0; j < clicked.length; j++) {
        card[j].classList.remove("card-selected");
        paymentEl[j].classList.add("payment");
        radioEl[j].checked = false;
      }

      const otherHeight = amountscrolled() + 250;
      popupCard.style.top = `${otherHeight}px`;
      popupCard.classList.remove("close");
      transparentBg.classList.remove("close");
      card[i + 1].classList.add("card-selected");
      paymentEl[i + 1].classList.remove("payment");
      radioEl[i + 1].checked = true;
    }
  });
}

for (let i = 0; i < radioEl.length; i++) {
  radioEl[i].addEventListener("mouseover", function () {
    selectRewardArrayForPopup = [
      0,
      bambooStandsLeft,
      blackStandsLeft,
      mahoganysLeft,
    ];
    if (selectRewardArrayForPopup[i] != 0 || i === 0) {
      labelEl[i].classList.add("radio-button-hovered");
    } else {
      radioEl[i].classList.remove("radio");
      labelEl[i].classList.remove("reward-label");
    }
  });

  radioEl[i].addEventListener("mouseout", function () {
    selectRewardArrayForPopup = [
      0,
      bambooStandsLeft,
      blackStandsLeft,
      mahoganysLeft,
    ];
    if (selectRewardArrayForPopup[i] != 0 || i === 0) {
      labelEl[i].classList.remove("radio-button-hovered");
    } else {
      radioEl[i].classList.remove("radio");
      labelEl[i].classList.remove("reward-label");
    }
  });

  radioEl[i].addEventListener("click", function () {
    selectRewardArrayForPopup = [
      0,
      bambooStandsLeft,
      blackStandsLeft,
      mahoganysLeft,
    ];
    if (selectRewardArrayForPopup[i] != 0 || i === 0) {
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
    } else {
      radioEl[i].classList.remove("radio");
      labelEl[i].classList.remove("reward-label");
    }
  });
}

window.addEventListener("resize", () => {
  if (bookmarked === true) {
    bookmarkEl.classList.add("bookmarked");
    bookmarkEl.innerHTML = `<img src="images/icon-bookmarked.svg" alt="" />
   Bookmarked`;
    bookmarkMobileEl.classList.add("bookmarked");
    bookmarkMobileEl.innerHTML = `<img src="images/icon-bookmarked.svg" alt="Bookmarked" />`;
  } else {
    bookmarkEl.classList.remove("bookmarked");
    bookmarkEl.innerHTML = `<img src="images/icon-bookmark.svg" alt="" />
   Bookmark`;
    bookmarkMobileEl.classList.remove("bookmarked");
    bookmarkMobileEl.innerHTML = `<img src="images/icon-bookmark.svg" alt="Bookmark" />`;
  }
});

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

bookmarkMobileEl.addEventListener("click", () => {
  if (bookmarked === false) {
    bookmarked = true;
    bookmarkMobileEl.classList.add("bookmarked");
    bookmarkMobileEl.innerHTML = `<img src="images/icon-bookmarked.svg" alt="Bookmarked" />`;
    bookmarkme();
  } else {
    bookmarkMobileEl.classList.remove("bookmarked");
    bookmarkMobileEl.innerHTML = `<img src="images/icon-bookmark.svg" alt="Bookmark" />`;
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
