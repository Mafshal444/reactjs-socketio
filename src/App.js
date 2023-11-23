import Example from "./example";
import { useState, useCallback } from "react";
function App() {
  const [press, setPress] = useState(0)
  console.log("App Component is Rendered.")
  const callBack = useCallback(() => {
    console.log("CallBack To Passed To child.")
  }, [])
  return (
    <div className="App">
      <input disabled value={press} />
      <button onClick={() => setPress(press+1)}> PressMe </button>
      <Example callBack={callBack} />
    </div>
  );
}

export default App;
