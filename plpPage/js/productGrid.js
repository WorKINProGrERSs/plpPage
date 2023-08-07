function productGrid(array) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (const obj of array) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.innerHTML = `
    <div class="Productphoto">
        <img src="${obj.image}" alt="">
    </div>
    <p class="name">${obj.itamName}</p>
    <p class="description">${obj.description}</p>
    <p class="price">${obj.price} €</p>
    <button class="addToCart">ADD TO CART</button>
`;

    const addToCartButton = gridItem.querySelector(".addToCart");
    addToCartButton.addEventListener("click", function () {
      alert(`${obj.itamName} has been added to cart`);
    });

    grid.appendChild(gridItem);
  }
}

export default productGrid;
