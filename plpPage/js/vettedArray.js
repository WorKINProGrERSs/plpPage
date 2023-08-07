import productArray from "../js/productArray.js";
import productGrid from "../js/productGrid.js";
import filterFunctionPrice from "../js/filterFunction.js";
import sortFunction from "../js/sortFunction.js";

function vettedArray(i) {
  let array = productArray(i);

  filterFunctionPrice(array);

  const numProducts = document.getElementById("numProducts");
  numProducts.textContent = array.length;

  try {
    array = sortFunction(array);
  } catch {
    productGrid(array);
  }
}
export default vettedArray;
