import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardType } from "../../interfaces/types";

import { Axios } from "../../module/Axios";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Cards } from "../../components/Cards";
import { NewModal } from "../../components/NewModal";

const Content = styled.div`
  margin-top: 80px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [adData, setAdData] = useState<CardType[]>([]);
  const [isNewOpen, setIsNewOpen] = useState<boolean>(false);

  useEffect(() => {
    Axios.get("/api/get-campaigns").then(({ data }) => {
      setAdData(data);
      setIsLoading(false);
    });
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    Axios.get("/api/get-campaigns").then(({ data }) => {
      setAdData(data);
      setIsLoading(false);
    });
  };

  return (
    <div data-testid="dashboardContainer">
      <Header setIsNewOpen={setIsNewOpen} />
      <Content>{isLoading ? <Loading /> : <Cards cards={adData} />}</Content>
      <NewModal
        isOpen={isNewOpen}
        setIsNewOpen={setIsNewOpen}
        fetchData={fetchData}
      />
    </div>
  );
};
