import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleEventHandler = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <ToggleContainer>
      <div>
        <h2>Switch: {isClicked ? "ON" : "OFF"}</h2>
        <input type="checkbox" id="toggle-switch" />
        <label htmlFor="toggle-switch" onClick={toggleEventHandler}></label>
      </div>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  width: 100%;

  div {
    margin: 50px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    padding: 20px 0;
  }

  label {
    display: inline-block;
    width: 60px;
    height: 34px;
    cursor: pointer;
    position: relative;
    background-color: #c9c9c9;
    border-radius: 34px;
  }
  label:before {
    content: "";
    display: block;
    width: 26px;
    height: 26px;
    position: absolute;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    transition: all 0.4s ease;
    border-radius: 50%;
  }

  input {
    display: none;
  }
  input:checked + label {
    background-color: #ffd952;
  }
  input:checked + label:before {
    transform: translateX(26px);
  }
`;

export default Toggle;
