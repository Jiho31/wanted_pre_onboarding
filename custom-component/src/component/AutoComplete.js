import React, { useState, useEffect, useRef } from "react";
import { searchData } from "../searchData";
import styled from "styled-components";

const AutoComplete = () => {
  const [inputText, setInputText] = useState("");
  const [dropdownData, setDropdownData] = useState(searchData);
  const searchInput = useRef();
  const dropdownRef = useRef();

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  const onBlurHandler = (e) => {
    setTimeout(() => {
      dropdownRef.current.style.display = "none";
    }, 200);
    dropdownRef.current.style.transform = "scaleY(0)";
  };
  const onFocusHandler = () => {
    dropdownRef.current.style.transform = "scaleY(1)";
  };
  const clickEventHandler = (e) => {
    setInputText(e.target.innerHTML);
    dropdownRef.current.style.transform = "scaleY(0)";
  };

  /*
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (
        e.target === searchInput.current ||
        e.target === dropdownRef.current
      ) {
        // 드롭다운 컨테이너 보이기
        document.querySelector(".dropdown-container").style.display = "block";

        // 검색창 input 테두리 스타일 변경
      } else {
        document.querySelector(".dropdown-container").style.display = "none";
      }
    });
  }, []);
  */

  useEffect(() => {
    const matchingResult = searchData.filter(
      (word) => word.indexOf(inputText) !== -1
    );
    setDropdownData(matchingResult);
  }, [inputText]);

  return (
    <Container>
      <label htmlFor="searchInput">영어로 과일 이름을 입력하세요: </label>
      <SearchWrapper>
        <SearchInput
          name="searchInput"
          type="text"
          value={inputText}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          autoComplete="off"
          list="fruit-names"
          ref={searchInput}
        ></SearchInput>
        <DropDownContainer className="dropdown-container" ref={dropdownRef}>
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
      </SearchWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  &:focus ~ .dropdown-container {
    transform: scaleY(1);
  }
`;
const DropDownContainer = styled.div`
  // display: none;
  transform: scaleY(0);
  position: relative;
  width: 40%;
  max-height: 13.3rem;
  border: 1px solid #d9d9d9;
  border-top: 0px;
  border-radius: 0 0 10px 10px;

  overflow: hidden;
  &:hover {
    transform: scaleY(1);
    transform-origin: top;
  }
  transition: transform 0.15s ease;
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
