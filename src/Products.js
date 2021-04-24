import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { getProducts } from "./actions";

let step = 1;
let shouldRequest = false;
const productsRequest = async (setProducts) => {
  if (shouldRequest) return;
  const productsData = await (await fetch(`http://localhost:3001/products?_page=${step++}&_limit=3`)).json();
  if (productsData.length < 3) shouldRequest = true;
  setProducts(getProducts(productsData));
};

function Products({ data, setProducts }) {
  useEffect(() => {
    productsRequest(setProducts);
  }, [setProducts]);

  return (
    <div>
      <ul>
        {data.map((dataItem) => (
          <ProductItem {...dataItem} key={dataItem.id} />
        ))}
      </ul>
      <button onClick={() => productsRequest(setProducts)}>Load More ...</button>
    </div>
  );
}

const calculateProducts = (state) => {
  const finalState = [];

  state.forEach((page) => {
    return page.forEach((product) => {
      finalState.push(product);
    });
  });

  return finalState;
};

const mapSateToProps = (state) => {
  return {
    data: calculateProducts(state.productsReducer),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (productsData) => {
      dispatch(productsData);
    },
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(Products);
