import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  padding: 40px;
  color: #9900cc;
`;

export const Loading: React.FC = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};
