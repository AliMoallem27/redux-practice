import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

import Cart from "./Cart";
import Products from "./Products";
import MyStore from "./MyStore";

function App() {
  const store = createStore(reducers, composeWithDevTools());

  return (
    <Provider store={store}>
      <MyStore>
        <Products />
        <Cart />
      </MyStore>
    </Provider>
  );
}

export default App;
