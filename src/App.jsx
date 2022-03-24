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
  const [cart, setCart] = useState([]);

  function addToCart(service) {
    const serviceAlreadyExists = cart.some((job) => job === service);
    if (serviceAlreadyExists) {
      alert(
        "O serviço já foi adicionado ao carrinho. Por favor, escolha outro."
      );
      return;
    }
    setCart([...cart, service]);
    alert(`O serviço ${service.title} foi adicionado ao carrinho.`);
  }

  function removeFromCart(id) {
    const newCart = cart.filter((service) => service.id !== id);
    setCart(newCart);
  }

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
        return (
          <ServiceListPage
            addToCart={addToCart}
            goToDetailPage={goToDetailPage}
          />
        );
      case "create":
        return <CreateService setCurrentScreen={setCurrentScreen} />;
      case "cart":
        return (
          <CartPage
            cart={cart}
            removeFromCart={removeFromCart}
            goToServiceListPage={goToServiceListPage}
          />
        );
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
