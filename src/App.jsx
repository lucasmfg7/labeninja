import React, { useState } from "react";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  function selectPage() {
    switch (currentScreen) {
      case "home":
        return;
      case "list":
        return;
      case "create":
        return;
      case "cart":
        return;
      default:
        return;
    }
  }

  return (
    <>
      <Header />
      App
      <GlobalStyle />
    </>
  );
};

export default App;
