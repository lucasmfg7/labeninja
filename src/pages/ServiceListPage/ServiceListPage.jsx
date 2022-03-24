import React, { useState, useEffect } from "react";
import { ServiceCard } from "../../components";
import { api } from "../../services/api";
import { Container, GridContainer } from "./styled";

export const ServiceListPage = ({ goToDetailPage, addToCart }) => {
  const [serviceList, setServiceList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/jobs").then(({ data }) => {
      setServiceList(data.jobs);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <h2>Lista de Serviços</h2>
      <GridContainer>
        {!loading ? (
          serviceList.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              goToDetailPage={goToDetailPage}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </GridContainer>
    </Container>
  );
};
