import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: var(--purple);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--background);

    &:hover {
    }
  }

  button {
    border: 0;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    background: var(--background);
    color: var(--purple);
    font-weight: 600;
    transition: border 0.2s, background-color 0.2s, color 0.2s;

    &:hover {
      border: 1px solid var(--background);
      background-color: var(--purple);
      color: var(--background);
    }
  }
`;

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
