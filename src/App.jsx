import React, { useState } from "react";
import { Header } from "./components";
import { CartPage, CreateService, HomePage, ServiceListPage } from "./pages";
import { GlobalStyle } from "./styles/global";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  function goToHomePage() {
    setCurrentScreen("home");
  }

  function goToCartPage() {
    setCurrentScreen("cart");
  }

  function goToServiceListPage() {
    setCurrentScreen("list");
  }

  function goToCreateServicePage() {
    setCurrentScreen("create");
  }

  function selectPage() {
    switch (currentScreen) {
      case "home":
        return (
          <HomePage
            goToCreateServicePage={goToCreateServicePage}
            goToServiceListPage={goToServiceListPage}
          />
        );
      case "list":
        return <ServiceListPage />;
      case "create":
        return <CreateService setCurrentScreen={setCurrentScreen} />;
      case "cart":
        return <CartPage />;
      default:
        return (
          <HomePage
            goToCreateServicePage={goToCreateServicePage}
            goToServiceListPage={goToServiceListPage}
          />
        );
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
