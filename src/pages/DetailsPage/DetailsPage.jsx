import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, DetailsContainer } from "./styled";

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
