import Example from "./example";
import { useState } from "react";
function App() {
  const [press, setPress] = useState(0)
  console.log("App Component is Rendered.")
  return (
    <div className="App">
      <input disabled value={press} />
      <button onClick={() => setPress(press+1)}> PressMe </button>
      <Example />
    </div>
  );
}

export default App;
