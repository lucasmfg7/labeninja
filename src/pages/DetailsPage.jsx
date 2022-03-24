import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  padding: 2rem;

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
      border-color: var(--purple);
      background-color: var(--background);
      color: var(--purple);
    }
  }
`;

const DetailsContainer = styled.div`
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  border: 1px solid var(--purple);
  color: var(--black);
  margin-bottom: 1rem;

  h2 {
    text-align: center;
  }
`;

export const DetailsPage = ({ jobId, goToServiceListPage }) => {
  const [service, setService] = useState([]);

  useEffect(() => {
    getJob();
  }, []);

  function getJob() {
    api.get(`/jobs/${jobId}`).then(({ data }) => setService(data));
  }

  return (
    <Container>
      {service ? (
        <DetailsContainer>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <p>
            <strong>Preço: </strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(service.price)}
          </p>
          <p>
            <strong>Prazo: </strong>
            {service.dueDate &&
              new Intl.DateTimeFormat("pt-BR").format(
                new Date(service.dueDate)
              )}
          </p>
          <ul>
            {service.paymentMethods &&
              service.paymentMethods.map((pay) => <li key={pay}>{pay}</li>)}
          </ul>
        </DetailsContainer>
      ) : (
        <p>Carregando...</p>
      )}
      <button onClick={goToServiceListPage}>Voltar</button>
    </Container>
  );
};
