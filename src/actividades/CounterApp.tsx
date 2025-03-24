import "./App.css";
import { useCounter } from "../hooks/useCounter";

function CounterApp() {
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

export default CounterApp;