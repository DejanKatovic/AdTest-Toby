import React from "react";
import styled from "styled-components";
import { CardType } from "../../interfaces/types";

const CardContainer = styled.div`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
  transition: all 0.2s ease-in;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px 20px;
  align-items: center;
  background: #f9f9f9;
  &:hover {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
    background: #eeeeee;
  }
`;

const Title = styled.div`
  font-weight: bold;
  text-align: right;
  font-size: 18px;
`;

const Content = styled.div`
  word-break: break-all;
`;

interface CardProp {
  card: CardType;
}

export const Card: React.FC<CardProp> = ({ card }: CardProp) => {
  return (
    <CardContainer data-testid="cardContainer">
      <Title>Id</Title>
      <Content>{card.id}</Content>
      <Title>Start Date</Title>
      <Content>{new Date(card.startDate).toISOString()}</Content>
      <Title>End Date</Title>
      <Content>{new Date(card.endDate).toISOString()}</Content>
      <Title>Target Impressions</Title>
      <Content>{card.targetImpressions}</Content>
      <Title>Delivered Impressions</Title>
      <Content>{card.deliveredImpressions}</Content>
    </CardContainer>
  );
};
