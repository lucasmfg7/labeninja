import React from "react";
import ninjaImg from "../../assets/labeninjas.png";
import { ButtonContainer, Container } from "./styled";

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
