import vettedArray from "../js/vettedArray.js";

function displayArray() {
  const bagsButton = document.getElementById("bags");
  const shoesButton = document.getElementById("shoes");
  const hatsButton = document.getElementById("hats");

  bagsButton.addEventListener("click", function () {
    vettedArray(0);
  });

  shoesButton.addEventListener("click", function () {
    vettedArray(1);
  });

  hatsButton.addEventListener("click", function () {
    vettedArray(2);
  });
}

export default displayArray;
