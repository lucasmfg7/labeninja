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

  button {
    margin-right: 1rem;
    border: 0;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    background: var(--purple);
    color: var(--background);
    font-weight: 600;
    font-size: 1rem;
    transition: border 0.2s, background-color 0.2s, color 0.2s;

    &:hover {
      background-color: ${lighten(0.1, "#7867BF")};
      color: var(--background);
    }
  }
`;

export const HomePage = ({ goToCreateServicePage, goToServiceListPage }) => {
  return (
    <Container>
      <img src={ninjaImg} alt="" />
      <div>
        <button onClick={goToCreateServicePage}>Cadastrar Serviço</button>
        <button onClick={goToServiceListPage}>Lista de Serviços</button>
      </div>
    </Container>
  );
};
