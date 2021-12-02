import React from "react";
import styled from "styled-components";

const Appbar = styled.div`
  background-color: #0066ff;
  padding: 15px 30px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Toolbar = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.div`
  color: white;
  font-size: 2rem;
  flex-grow: 1;
`;

const Button = styled.a`
  border: solid 1px white;
  background: #cc33ff;
  color: white;
  padding: 10px 20px;
  display: block;
  font-weight: bold;
  &:hover {
    background: #9900cc;
  }
  text-decoration: none;
`;

interface HeaderProps {
  setIsNewOpen: (value: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  setIsNewOpen,
}: HeaderProps) => {
  return (
    <Appbar>
      <Toolbar>
        <Title>AdViewer</Title>
        <Button
          as="a"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            setIsNewOpen(true);
          }}
        >
          New
        </Button>
      </Toolbar>
    </Appbar>
  );
};
