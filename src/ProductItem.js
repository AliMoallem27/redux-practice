import React from "react";
import { connect } from "react-redux";

import { addToCart } from "./actions";

function ProductItem({ id, title, price, count, dispatchAdd }) {
  return (
    <li style={listStyle}>
      <button style={btnStyle} onClick={() => dispatchAdd(id)}>
        add to cart
      </button>
      <span> name: {title}</span>
      {" | "}
      <span>price: ${price}</span>
      {" | "}
      <span>count: {count}</span>
    </li>
  );
}

const btnStyle = {
  backgroundColor: "#59fc7c",
  border: "none",
  borderRadius: "100px",
  padding: "4px",
  cursor: "pointer",
};

const listStyle = {
  textAlign: "left",
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatchAdd: (id) => {
      props.count !== 0 && dispatch(addToCart(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
