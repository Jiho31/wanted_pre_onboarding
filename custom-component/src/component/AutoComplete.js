import React, { useState } from "react";
import { searchData } from "../searchData";

const AutoComplete = () => {
  const [inputText, setInputText] = useState("");

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <label htmlFor="searchInput">영어로 과일 이름을 입력하세요: </label>
      <input
        name="searchInput"
        type="text"
        value={inputText}
        onChange={onChangeHandler}
        autoComplete="off"
        list="fruit-names"
      ></input>
      <datalist id="fruit-names">
        {searchData.map((fruit, idx) => {
          return <option key={idx} value={fruit} />;
        })}
      </datalist>
    </div>
  );
};

export default AutoComplete;
