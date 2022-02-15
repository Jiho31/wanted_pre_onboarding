import React, { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import closeIcon from "../assets/close.png";
import { ModalContext } from "../App";

const Modal = () => {
  const modalRef = useRef();
  const modalContext = useContext(ModalContext);

  useEffect(() => {
    if (modalContext.modalDisplay) {
      modalRef.current.style.display = "flex";
    } else {
      modalRef.current.style.display = "none";
    }
  }, [modalContext.modalDisplay]);

  const clickEventHandler = (e) => {
    modalContext.modalDispatch("hide");
  };

  return (
    <ModalWrapper ref={modalRef} onClick={clickEventHandler}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={clickEventHandler}>
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
  top: 8px;
  right: 10px;

  button {
    width: 11x;
    height: 11px;
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
  align-items: center;
`;

export default Modal;
