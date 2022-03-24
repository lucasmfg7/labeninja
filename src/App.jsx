import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      toast.warning("Este serviço já foi adicionado ao carrinho.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setCart([...cart, service]);
    toast.success(`O serviço ${service.title} foi adicionado ao carrinho.`, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  }

  function removeFromCart(id) {
    const newCart = cart.filter((service) => service.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
    toast.success(`Obrigado por comprar conosco.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    goToHomePage();
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
            clearCart={clearCart}
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
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
