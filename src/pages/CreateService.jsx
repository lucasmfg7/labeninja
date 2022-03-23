import React, { useState } from "react";
import styled from "styled-components";
import { lighten } from "polished";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  padding: 1rem;
  text-align: center;
`;

const Content = styled.form`
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  border: 1px solid var(--purple);
  color: var(--black);
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }

  input,
  select {
    border: 1px solid var(--purple);
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.5rem;

    &::placeholder {
      color: var(--black);
      font-size: 1rem;
    }
  }

  option,
  input[type="date"] {
    color: var(--black);
    font-size: 1rem;
  }

  button {
    margin-right: 1rem;
    border: 0;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    margin-top: 0.25rem;
    background: var(--purple);
    color: var(--background);
    font-weight: 600;
    font-size: 1rem;
    align-self: center;
    transition: border 0.2s, background-color 0.2s, color 0.2s;

    &:hover {
      background-color: ${lighten(0.1, "#7867BF")};
      color: var(--background);
    }
  }
`;

export const CreateService = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [dueDate, setDueDate] = useState("");

  function createService(e) {
    e.preventDefault();
    const service = { title, description, price, paymentMethods, dueDate };
    console.log(service);
  }

  return (
    <Container>
      <Content onSubmit={createService}>
        <h2>Cadastrar o Serviço</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Descrição"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Preço"
        />
        <select
          value={paymentMethods}
          onChange={(e) => {
            setPaymentMethods(
              Array.from(e.target.selectedOptions, (option) => option.value)
            );
          }}
          multiple
        >
          <option value="Débito">Débito</option>
          <option value="Crédito">Crédito</option>
          <option value="Pix">Pix</option>
          <option value="Boleto">Boleto</option>
        </select>
        <input
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          type="date"
          placeholder="dd/mm/aaaa"
        />
        <button>Cadastrar</button>
      </Content>
    </Container>
  );
};
