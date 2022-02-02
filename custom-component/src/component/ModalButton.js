import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../App";

const ModalButton = () => {
  const modalContext = useContext(ModalContext);

  const clickEventHandler = (e) => {
    modalContext.modalDispatch("show");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <OpenButton onClick={clickEventHandler}>Open Modal</OpenButton>
    </div>
  );
};

const OpenButton = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  background-color: #ffd952;
  border-radius: 15px;
  margin-top: 50px;
`;

export default ModalButton;
