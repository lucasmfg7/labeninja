import React, { useState } from "react";
import styled from "styled-components";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export const CreateService = ({ setCurrentScreen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [dueDate, setDueDate] = useState("");

  function createService(e) {
    e.preventDefault();

    const body = {
      title,
      description,
      price: Number(price),
      paymentMethods,
      dueDate,
    };

    api.post("/jobs", body);

    setTitle("");
    setDescription("");
    setPrice("");
    setPaymentMethods([]);
    setDueDate("");

    toast.success("Serviço cadastrado com sucesso.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });

    setCurrentScreen("home");
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
          type="number"
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
