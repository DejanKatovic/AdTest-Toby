import React, { useState } from "react";
import styled from "styled-components";

import { Axios } from "../../module/Axios";

const ModalContainer = styled.div`
  background-color: #0066ff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  padding: 20px;
  background: white;
  border: solid 2px lightGrey;
`;

const Header = styled.h2`
  font-style: italic;
  font-size: 24px;
  line-height: 1.2;
  margin: 0;
`;

const FormWrapper = styled.form`
  display: block;
  margin-top: 20px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

const LabelWrapper = styled.label`
  display: block;
  width: 150px;
  text-align: right;
  margin-right: 10px;
`;

const Blank = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  border: solid 1px white;
  background: #0066ff;
  color: white;
  padding: 10px 20px;
  display: block;
  font-weight: bold;
  &:hover {
    background: #5599ff;
  }
  text-decoration: none;
  &:disabled {
    background: lightgrey;
  }
`;

interface NewModalProps {
  isOpen: boolean;
  setIsNewOpen: (value: boolean) => void;
  fetchData: () => void;
}

export const NewModal = ({
  isOpen,
  setIsNewOpen,
  fetchData,
}: NewModalProps) => {
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const startValue = new Date(start).getTime();
    const endValue = new Date(end).getTime();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setDescription("Submitting...");
    Axios.post("/api/add-campaign", {
      startDate: startValue,
      endDate: endValue,
      targetImpressions: target,
    }).then(({ data }) => {
      fetchData();
      setDescription("Success");
      setIsSubmitting(false);
      setStart("");
      setEnd("");
      setTarget("");
    });
  };

  return (
    <ModalContainer style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContent>
        <Header>Add New Data</Header>
        <FormWrapper onSubmit={handleSubmit}>
          <FormControl>
            <LabelWrapper>Start date:</LabelWrapper>
            <input
              type="date"
              value={start}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStart(e.target.value)
              }
              required
            />
          </FormControl>
          <FormControl>
            <LabelWrapper>End date:</LabelWrapper>
            <input
              type="date"
              value={end}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEnd(e.target.value)
              }
              required
            />
          </FormControl>
          <FormControl>
            <LabelWrapper>Target Impressions:</LabelWrapper>
            <input
              type="number"
              value={target}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTarget(e.target.value)
              }
              required
            />
          </FormControl>
          <FormControl>
            <Blank>
              <div>{description}</div>
            </Blank>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Button
              type="reset"
              onClick={() => {
                setDescription("");
                setIsNewOpen(false);
              }}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </FormControl>
        </FormWrapper>
      </ModalContent>
    </ModalContainer>
  );
};
