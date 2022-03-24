import React from "react";
import styled from "styled-components";
import { CartCard } from "../components/CartCard";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  padding: 2rem;
  gap: 10px;

  h4 {
    color: var(--black);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    border: 1px solid var(--purple);
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    background: var(--purple);
    color: var(--background);
    font-weight: 600;
    font-size: 1rem;
    transition: border 0.2s, background-color 0.2s, color 0.2s;

    &:hover {
      border: 1px solid var(--purple);
      background-color: var(--background);
      color: var(--purple);
    }
  }
`;

export const CartPage = () => {
  return (
    <Container>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <h4>Total: R$100.00</h4>
      <ButtonContainer>
        <button>Finalizar</button>
        <button>Voltar</button>
      </ButtonContainer>
    </Container>
  );
};
