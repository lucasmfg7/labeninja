import React from "react";
import styled from "styled-components";
import { ServiceCard } from "../components/ServiceCard";

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
  gap: 2rem;
`;

export const ServiceListPage = () => {
  return (
    <Container>
      <GridContainer>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </GridContainer>
    </Container>
  );
};
