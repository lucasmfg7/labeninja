import React from "react";
import styled from "styled-components";
import ninjaImg from "../assets/labeninjas.png";
import { lighten } from "polished";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  padding: 1rem;

  img {
    width: 100%;
    max-width: 350px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    border: 1px solid var(--purple);
    padding: 0.75rem 1rem;
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

export const HomePage = ({ goToCreateServicePage, goToServiceListPage }) => {
  return (
    <Container>
      <img src={ninjaImg} alt="" />
      <ButtonContainer>
        <button onClick={goToCreateServicePage}>Cadastrar Serviço</button>
        <button onClick={goToServiceListPage}>Lista de Serviços</button>
      </ButtonContainer>
    </Container>
  );
};
