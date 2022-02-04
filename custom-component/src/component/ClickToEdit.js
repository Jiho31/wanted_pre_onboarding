import React, { useState } from "react";
import styled from "styled-components";
// import useInputs from "../hooks/useInputs";

const initialValue = {
  name: "복지호",
  age: "2n",
  mbti: "ISFJ",
};

const ClickToEdit = () => {
  // const [{ name, age, mbti }, onChange] = useInputs({
  //   name: "복지호",
  //   age: "2n",
  //   mbti: "ISFJ",
  // });
  const [inputs, setInputs] = useState(initialValue);
  const [form, setForm] = useState(initialValue);

  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [id]: value }));
  };
  const onBlurHandler = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  return (
    <Container>
      <h2>ClickToEdit</h2>
      <form>
        <FormElement>
          <label htmlFor="name">이름</label>
          <input
            id="name"
            type="text"
            value={inputs.name}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </FormElement>
        <FormElement>
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="text"
            value={inputs.age}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </FormElement>
        <FormElement>
          <label htmlFor="mbti">MBTI</label>
          <input
            id="mbti"
            type="text"
            value={inputs.mbti}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </FormElement>
      </form>
      <Result>
        <p>
          안녕하세요! 저는 {form.name}입니다.
          <br />
          나이는 {form.age}살이고 MBTI는 {form.mbti}입니다.
          <br />
          오늘도 행복한 하루 되세요! 😁
        </p>
      </Result>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;

  h2 {
    margin: 15px 0;
  }
`;
const FormElement = styled.div`
  margin: 10px;
  font-size: 14px;
  label {
    width: 50px;
    margin-right: 10px;
  }
  input {
    width: 180px;
    height: 30px;
    padding: 5px 8px;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 5px;
  }
  input:focus {
    border: 2px solid #ffd952;
  }
`;
const Result = styled.div`
  display: flex;
  margin: 0 auto;
`;

export default ClickToEdit;
