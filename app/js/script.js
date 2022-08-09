const bookmarkEl = document.querySelector(".bookmark");
const radioEl = document.querySelectorAll('[type="radio"]');
const labelEl = document.querySelectorAll("label");
const indexes_of_buttons_not_clicked = [];
let clicked = [false, false, false, false];
let bookmarked = false;

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
        indexes_of_buttons_not_clicked.push(index);
      }
    }
    // removes the cyan color from the labels that haven't been clicked
    for (let j = 0; j < clicked.length; j++) {
      labelEl[j].classList.remove("radio-button-clicked");
    }
    // adds the cyan color to the label that has been clicked
    labelEl[i].classList.add("radio-button-clicked");
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
