import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import AppRoutes from "./Components/Routes";
import Projects from "./Components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
