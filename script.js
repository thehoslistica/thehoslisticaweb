const scrollContainer = document.getElementById("scroll-container");
const homePage = document.getElementById("home-page");
const main = document.getElementById("home-page");
window.onscroll = function () {
  homePage ? scrollFunc() : "";
  main ? setHeightMain() : "";
};

function scrollFunc() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    document.getElementById("navbar").style.backgroundColor = "#121212";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

function setHeightMain() {
  main.style.height = "5000px";
}

scrollContainer.addEventListener("wheel", evt => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

function scrollL() {
  const left = scrollContainer;
  left.scrollBy({
    left: 1200,
    behavior: "smooth",
  });
}

function scrollR() {
  const right = scrollContainer;
  right.scrollBy({
    left: -1200,
    behavior: "smooth",
  });
}

const elementsCol = document.getElementById("img-col");
let i;
if (elementsCol) {
  for (i = 0; i < elementsCol.length; i++) {
    elementsCol[i].style.flex = "50%";
  }
}