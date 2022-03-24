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

export const CartPage = ({
  goToServiceListPage,
  cart,
  removeFromCart,
  clearCart,
}) => {
  const servicesPrices = cart
    .map((service) => service.price)
    .reduce((acc, number) => {
      return acc + number;
    }, 0);

  console.log(servicesPrices);
  return (
    <Container>
      {cart.length > 0 ? (
        cart.map((service) => (
          <CartCard
            key={service.id}
            service={service}
            removeFromCart={removeFromCart}
          />
        ))
      ) : (
        <p>Carrinho Vazio</p>
      )}
      <h4>
        {`Total: ${new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(servicesPrices)}
        `}
      </h4>
      <ButtonContainer>
        {cart.length > 0 && <button onClick={clearCart}>Finalizar</button>}
        <button onClick={goToServiceListPage}>Voltar</button>
      </ButtonContainer>
    </Container>
  );
};
