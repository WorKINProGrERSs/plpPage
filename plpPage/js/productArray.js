import productObject from "./productObject.js";
import contentArrays from "./contentArrays.js";

function productArray(i) {
  const displyProductsArr = [];
  for (let j = 0; j < contentArrays[i][0].length; j++) {
    displyProductsArr.push(productObject(i, j));
  }
  return displyProductsArr;
}

export default productArray;
