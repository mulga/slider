// var auto = document.getElementById("auto");
// var house = document.getElementById("house");

function showHouse() {
  var slider = document.querySelector(".card-slider");
  //   slider.style.left = "-465px";
  slider.classList.remove("left");
}
function showAuto() {
  var slider = document.querySelector(".card-slider");
  slider.classList.add("left");
}
