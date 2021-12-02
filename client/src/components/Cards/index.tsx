import React from "react";
import styled from "styled-components";
import { CardType } from "../../interfaces/types";
import { Card } from "../Card";

const CardsContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

interface CardsProps {
  cards: CardType[];
}

export const Cards: React.FC<CardsProps> = ({ cards }: CardsProps) => {
  return (
    <CardsContainer data-testid="cardsContainer">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </CardsContainer>
  );
};
