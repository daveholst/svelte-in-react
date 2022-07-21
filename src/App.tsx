import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { SvelteWrapper } from "./components/SvelteWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>This is my react app!</h1>
      <h3>A wild svelte component appears...</h3>
      <SvelteWrapper animal="Dog" />
    </div>
  );
}

export default App;
