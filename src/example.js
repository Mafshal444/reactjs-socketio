import React from "react";

function Example() {
	console.log("Example Component is Rendered.")
  return (
    <div className="App">
      <h1>Example Component</h1>
    </div>
  );
}

export default React.memo(Example);
