import React from "react";
import { Container } from "./styled";

export const Header = ({ goToHomePage, goToCartPage }) => {
  return (
    <Container>
      <h1>
        <a href="#" onClick={goToHomePage}>
          LabeNinjas
        </a>
      </h1>
      <div>
        <button onClick={goToCartPage}>Carrinho</button>
      </div>
    </Container>
  );
};
