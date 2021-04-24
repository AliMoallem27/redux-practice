import React from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";

function Cart({ cartData, totalPrice, totalCount }) {
  return (
    <div>
      <ul>{typeof cartData !== "undefined" && cartData.map((dataItem) => <CartItem {...dataItem} key={dataItem.id} />)}</ul>
      <div>total count is : {totalCount}</div>
      <div>total price is : {totalPrice}$</div>
    </div>
  );
}

const calculateCart = ({ products, addedIds, quantityById }) => {
  const finalState = [];

  products.forEach((page) => {
    page.forEach((product) => {
      if (addedIds.includes(product.id)) {
        finalState.push({ ...product, count: quantityById[product.id] });
      }
    });
  });

  return finalState;
};

const calculateTotal = ({ products, addedIds, quantityById, type }) => {
  return products.reduce((total, page) => {
    return (
      total +
      page.reduce((pageTotal, product) => {
        const totalData = type === "PRICE" ? product.price * quantityById[product.id] : type === "COUNT" && quantityById[product.id];
        return addedIds.includes(product.id) ? pageTotal + totalData : pageTotal;
      }, 0)
    );
  }, 0);
};

const mapStateToProps = (state) => {
  const inputValues = { products: state.productsReducer, addedIds: state.cartReducer.addedIds, quantityById: state.cartReducer.quantityById };
  return {
    cartData: calculateCart(inputValues),
    totalPrice: calculateTotal({ ...inputValues, type: "PRICE" }),
    totalCount: calculateTotal({ ...inputValues, type: "COUNT" }),
  };
};

export default connect(mapStateToProps)(Cart);
