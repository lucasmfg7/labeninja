import React from "react";
import { CartCard } from "../../components";
import { Container, ButtonContainer } from "./styled";

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
