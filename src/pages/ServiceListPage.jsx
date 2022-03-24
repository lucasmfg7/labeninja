import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ServiceCard } from "../components/ServiceCard";
import { api } from "../services/api";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  padding: 1rem;
`;

const GridContainer = styled.div`
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const ServiceListPage = () => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    api.get("/jobs").then(({ data }) => setServiceList(data.jobs));
  }, []);

  console.log(serviceList);

  return (
    <Container>
      <GridContainer>
        {serviceList.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </GridContainer>
    </Container>
  );
};
