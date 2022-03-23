import React, { useState } from "react";
import { Header } from "./components";
import { CartPage, CreateService, HomePage, ServiceListPage } from "./pages";
import { GlobalStyle } from "./styles/global";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("list");

  function goToHomePage() {
    setCurrentScreen("home");
  }

  function goToCartPage() {
    setCurrentScreen("cart");
  }

  function selectPage() {
    switch (currentScreen) {
      case "home":
        return <HomePage />;
      case "list":
        return <ServiceListPage />;
      case "create":
        return <CreateService />;
      case "cart":
        return <CartPage />;
      default:
        return <HomePage />;
    }
  }

  return (
    <>
      <Header goToHomePage={goToHomePage} goToCartPage={goToCartPage} />
      {selectPage()}
      <GlobalStyle />
    </>
  );
};

export default App;
