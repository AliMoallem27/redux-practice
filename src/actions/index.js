export function getProducts(productsData) {
  return { type: "GET_PRODUCTS", productsData };
}

export function addToCart(id) {
  return { type: "ADD_TO_CART", id };
}

export function removeFromCart(id, count) {
  return { type: "REMOVE_FROM_CART", id, count };
}
