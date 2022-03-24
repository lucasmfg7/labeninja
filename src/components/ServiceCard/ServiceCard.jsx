import React from "react";
import { ButtonContainer, Container } from "./styled";

export const ServiceCard = ({ service, goToDetailPage, addToCart }) => {
  const { title, price, dueDate, id } = service;

  return (
    <Container>
      <h4>{title}</h4>
      <p>
        <strong>Preço: </strong>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </p>
      <p>
        <strong>Prazo: </strong>
        {new Intl.DateTimeFormat("pt-BR").format(new Date(dueDate))}
      </p>
      <ButtonContainer>
        <button onClick={() => goToDetailPage(id)}>Detalhes</button>
        <button onClick={() => addToCart(service)}>Adicionar</button>
      </ButtonContainer>
    </Container>
  );
};
