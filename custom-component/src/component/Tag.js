import React, { useState } from "react";
import styled from "styled-components";
import closeIcon from "../assets/close2.png";

const Tag = () => {
  const [tagInput, setTagInput] = useState("");
  const [tagElementList, setTagElementList] = useState([]);

  const onChangeHandler = (e) => {
    setTagInput(e.target.value);
  };
  const onKeyUpHandler = (e) => {
    // 엔터 키가 눌렸을 경우
    if (tagInput !== "" && e.keyCode === 13) {
      setTagElementList((prev) => {
        return [...prev, { id: tagInput + Date.now(), content: tagInput }];
      });

      // input 값 초기화
      setTagInput("");
    }
  };
  const removeTag = (e) => {
    setTagElementList((prev) => {
      const newTagList = prev.filter((el) => el.id !== e.target.id);
      return newTagList;
    });
  };

  return (
    <TagContainer>
      <h2>🏷 태그를 추가하세요: </h2>
      <InputWrapper>
        <TagList className="tag-list">
          {tagElementList.map((el) => {
            return (
              <li key={el.id}>
                <span>{el.content}</span>
                <button onClick={removeTag}>
                  <img
                    id={el.id}
                    src={closeIcon}
                    alt={`remove ${el.content} tag`}
                  />
                </button>
              </li>
            );
          })}
        </TagList>
        <input
          type="text"
          value={tagInput}
          placeholder="Press enter to add tags"
          onChange={onChangeHandler}
          onKeyUp={onKeyUpHandler}
        />
      </InputWrapper>
    </TagContainer>
  );
};

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25vh 0;
`;

const InputWrapper = styled.div`
  margin: 20px 0;
  width: 500px;
  max-width: 80%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  input {
    width: 100%;
    min-width: fit-content;
    height: 40px;
    padding: 10px;
    border: 0;
    border-radius: 5px;
  }
`;
const TagList = styled.ul`
  max-width: 100%;
  display: flex;
  align-items: center;
  padding-left: 4px;
  flex-wrap: wrap;

  li {
    display: inline-flex;
    align-items: center;
    background-color: #ffd952;
    border-radius: 5px;
    margin: 4px;
    padding: 5px;
    font-size: 13px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
  }

  button {
    width: fit-content;
    height: 15px;
    margin: 0 2px;
  }

  img {
    width: 15px;
  }
`;

export default Tag;
