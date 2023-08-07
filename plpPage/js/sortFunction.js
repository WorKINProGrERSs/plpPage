import productGrid from "../js/productGrid.js";

function sortFunction(array) {
  const sortAZ = document.getElementById("sortA-Z");
  const sortZA = document.getElementById("sortZ-A");
  const sorLowPrice = document.getElementById("sorLowPrice");
  const sortHighPrice = document.getElementById("sortHighPrice");
  const clear = document.getElementById("clearSort");

  sortAZ.addEventListener("click", function () {
    array.sort((a, b) => {
      const nameA = a.itamName.toUpperCase();
      const nameB = b.itamName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    productGrid(array);
  });

  sortZA.addEventListener("click", function () {
    array.sort((a, b) => {
      const nameA = a.itamName.toUpperCase();
      const nameB = b.itamName.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    productGrid(array);
  });

  sorLowPrice.addEventListener("click", function () {
    array.sort((a, b) => a.price - b.price);
    productGrid(array);
  });

  sortHighPrice.addEventListener("click", function () {
    array.sort((a, b) => b.price - a.price);
    productGrid(array);
  });

  clear.addEventListener("click", function () {
    productGrid(array);
  });
}
export default sortFunction;
