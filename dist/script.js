// Hides search bar in Nav by adding 'hidden' class
const search = document.getElementById("search");
document.getElementById("close").addEventListener("click", function () {
  search.classList.add("hidden");
});
// Shows search bar in Nav by removing 'hidden' class
document.getElementById("search-icon").addEventListener("click", function () {
  search.classList.remove("hidden");
});

// Hamburger menu
const barTop = document.getElementsByClassName("bar")[0];
const barMiddle = document.getElementsByClassName("bar")[1];
const barBottom = document.getElementsByClassName("bar")[2];

const navLinksMobile = document.getElementById("nav-links-mobile");

document.getElementById("hamburger").addEventListener("click", function () {
  console.log(barTop);
  barTop.classList.toggle("bar-top");
  barMiddle.classList.toggle("bar-middle");
  barBottom.classList.toggle("bar-bottom");

  navLinksMobile.classList.toggle("hidden");
});
