const bookmarkEl = document.querySelector(".bookmark");
let bookmarked = false;

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
