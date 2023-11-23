import React from "react";

function Example({ callBack }) {
	console.log("Example Component is Rendered.")
  return (
    <div className="App">
      <h1>Example Component</h1>
			<button onClick={callBack}> Press CallBack </button>
    </div>
  );
}

export default React.memo(Example);
