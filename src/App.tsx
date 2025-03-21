import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCounter } from "./hooks/useCounter";

function App() {
  const {count, incrementent, decrement, reset} = useCounter(10);

  return (
    <>
      <h1>Contador de Pruebas: {count}</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={incrementent} >+</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}

export default App;
