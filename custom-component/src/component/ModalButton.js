import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../App";

const ModalButton = () => {
  const modalContext = useContext(ModalContext);

  const clickEventHandler = (e) => {
    modalContext.modalDispatch("show");
  };

  return (
    <Container>
      <OpenModalButton onClick={clickEventHandler}>Open Modal</OpenModalButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50vh;
`;

const OpenModalButton = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  background-color: #ffd952;
  border-radius: 15px;
  margin: 0 auto;
`;

export default ModalButton;
