import productGrid from "../js/productGrid.js";
function filterFunctionPrice(array) {
  const newArray = [];
  const apply = document.getElementById("applyPrice");

  apply.addEventListener("click", function () {
    const min = document.getElementById("min").value;
    let minValue;
    if (min.trim() === "") {
      minValue = 0;
    } else {
      minValue = parseFloat(min.trim());
    }

    const max = document.getElementById("max").value;
    let maxValue;
    if (max.trim() === "") {
      maxValue = 0;
    } else {
      maxValue = parseFloat(max.trim());
    }

    for (const obj of array) {
      if (minValue > obj.price) {
        continue;
      }
      if (maxValue !== 0 && maxValue < obj.price) {
        continue;
      }
      newArray.push(obj);
    }
    productGrid(newArray);
  });
}

export default filterFunctionPrice;
