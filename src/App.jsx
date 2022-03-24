import React, { useState } from "react";
import { Header } from "./components";
import {
  CartPage,
  CreateService,
  DetailsPage,
  HomePage,
  ServiceListPage,
} from "./pages";
import { GlobalStyle } from "./styles/global";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [jobDetailId, setJobDetailId] = useState("");

  function goToDetailPage(jobId) {
    setCurrentScreen("details");
    setJobDetailId(jobId);
  }

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
        return <ServiceListPage goToDetailPage={goToDetailPage} />;
      case "create":
        return <CreateService setCurrentScreen={setCurrentScreen} />;
      case "cart":
        return <CartPage />;
      case "details":
        return (
          <DetailsPage
            jobId={jobDetailId}
            goToServiceListPage={goToServiceListPage}
          />
        );
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
