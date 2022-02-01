import React from "react";
import styled from "styled-components";

const ModalButton = () => {
  const clickEventHandler = (e) => {
    console.log("clicked");
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
