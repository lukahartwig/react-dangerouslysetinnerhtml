import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <div dangerouslySetInnerHTML={{ __html: "I should only paint once" }} />
    </>
  );
}

export default App;
