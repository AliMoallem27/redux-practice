import React from "react";

function MyStore({ children }) {
  return (
    <div className="App">
      <div className="App-header">{children}</div>
    </div>
  );
}

export default MyStore;
