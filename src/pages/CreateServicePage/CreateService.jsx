import React, { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Content } from "./styled";

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
