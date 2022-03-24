import React, { useState, useEffect } from "react";
import { ServiceCard } from "../../components";
import { api } from "../../services/api";
import { Container, GridContainer } from "./styled";

export const ServiceListPage = ({ goToDetailPage, addToCart }) => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    api.get("/jobs").then(({ data }) => setServiceList(data.jobs));
  }, []);

  return (
    <Container>
      <h2>Lista de Serviços</h2>
      <GridContainer>
        {serviceList.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            goToDetailPage={goToDetailPage}
            addToCart={addToCart}
          />
        ))}
      </GridContainer>
    </Container>
  );
};
