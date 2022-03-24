import React from "react";
import { Card } from "./styled";

export const CartCard = ({ service, removeFromCart }) => {
  return (
    <Card>
      <h3>{service.title}</h3>
      <p>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(service.price)}
      </p>
      <button onClick={() => removeFromCart(service.id)}>Remover</button>
    </Card>
  );
};
