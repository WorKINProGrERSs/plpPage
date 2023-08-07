import contentArrays from "./contentArrays.js";

function productObject(i, j) {
  const product = {
    id: contentArrays[i][0][j],
    image: contentArrays[i][1][j],
    itamName: contentArrays[i][2][j],
    price: contentArrays[i][3][j],
    description: contentArrays[i][4][j],
    copour: contentArrays[i][5][j],
    material: contentArrays[i][6][j],
    rating: contentArrays[i][7][j],
  };
  return product;
}
export default productObject;
