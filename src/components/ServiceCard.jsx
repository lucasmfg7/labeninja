import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: var(--purple);
  color: var(--background);
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  text-align: center;

  h4 {
    margin-bottom: 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    border: 1px solid var(--purple);
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

export const ServiceCard = ({ service, goToDetailPage }) => {
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
        <button>Adicionar</button>
      </ButtonContainer>
    </Container>
  );
};
