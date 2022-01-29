import React, { useState, useEffect } from "react";
import { searchData } from "../searchData";
import styled from "styled-components";

const AutoComplete = () => {
  const [inputText, setInputText] = useState("");
  const [dropdownData, setDropdownData] = useState(searchData);

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  const onBlurHandler = () => {
    document.querySelector(".dropdown-container").style.display = "none";
  };
  const onFocusHandler = () => {
    if (dropdownData.length === 0) {
    }
    document.querySelector(".dropdown-container").style.display = "block";
  };
  const clickEventHandler = (e) => {
    setInputText(e.target.innerHTML);
    console.log(e.target.innerHTML);
  };

  useEffect(() => {
    const matchingResult = searchData.filter(
      (word) => word.indexOf(inputText) !== -1
    );
    setDropdownData(matchingResult);
  }, [inputText]);

  return (
    <Container>
      <label htmlFor="searchInput">영어로 과일 이름을 입력하세요: </label>
      {/* <SearchInput
        name="searchInput"
        type="text"
        value={inputText}
        onChange={onChangeHandler}
        autoComplete="off"
        list="fruit-names"
      ></SearchInput>
      <datalist id="fruit-names">
        {searchData.map((fruit, idx) => {
          return <option key={idx} value={fruit} />;
        })}
      </datalist> */}
      <SearchInput
        name="searchInput"
        type="text"
        value={inputText}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        autoComplete="off"
        list="fruit-names"
      ></SearchInput>
      <DropDownContainer className="dropdown-container">
        <ul>
          {dropdownData.length > 0 ? (
            dropdownData.map((fruit, idx) => {
              return (
                <DropDownContent key={idx} onClick={clickEventHandler}>
                  {fruit}
                </DropDownContent>
              );
            })
          ) : (
            <DropDownContent noMatch>
              일치하는 자동완성 결과가 없습니다
            </DropDownContent>
          )}
        </ul>
      </DropDownContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  width: 40%;
  height: 2.5rem;
  padding: 4px 15px;
  margin: 10px 10px 0 10px;
  border: 1px solid #d9d9d9;
  border-radius: 22px;
  font-size: 16px;
  &:focus {
    border-radius: 10px 10px 0 0;
    border-bottom: 0px;
  }
`;
const DropDownContainer = styled.div`
  display: none;
  position: relative;
  width: 40%;
  max-height: 13.3rem;
  border: 1px solid #d9d9d9;
  border-top: 0px;
  border-radius: 0 0 10px 10px;

  overflow: hidden;
`;
const DropDownContent = styled.li`
  width: 100%;
  height: 2.2rem;
  padding: 4px 15px;
  display: inline-flex;
  align-items: center;
  &:hover {
    background-color: #d9d9d9;
    cursor: default;
  }
  ${(props) =>
    props.noMatch &&
    `
    font-color: #adadad !important;
    font-size: 13px;
  `}
`;

export default AutoComplete;
