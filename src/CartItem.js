import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "./actions";

function CartItem({ id, title, price, count, dispatchRemove }) {
  return (
    <li style={listStyle}>
      <button style={btnStyle} onClick={() => dispatchRemove(id)}>
        remove from cart
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
  backgroundColor: "#ff7878",
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
    dispatchRemove: (id) => {
      dispatch(removeFromCart(id, props.count));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
