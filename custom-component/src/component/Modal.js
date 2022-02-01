import React from "react";
import styled from "styled-components";
import closeIcon from "../../src/close.png";

const Modal = () => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <CloseButton>
          <button>
            <img src={closeIcon} alt="close modal" />
          </button>
        </CloseButton>
        <ModalContent>
          <p>이것은 모달창입니다!</p>
        </ModalContent>
      </ModalContainer>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const CloseButton = styled.div`
  display: block;
  position: relative;
  width: fit-content;
  float: right;
  top: 10px;
  right: 10px;

  button {
    width: 13x;
    height: 13px;
  }
  img {
    width: inherit;
    height: inherit;
  }
`;
const ModalContainer = styled.div`
  background-color: #fff;
  width: 400px;
  height: 200px;
  border-radius: 10px;
`;
const ModalContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
`;

export default Modal;
