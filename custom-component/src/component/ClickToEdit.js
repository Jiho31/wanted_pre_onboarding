import React from "react";
import styled from "styled-components";

const ClickToEdit = () => {
  return (
    <Container>
      <h2>ClickToEdit</h2>
      <form>
        <FormElement>
          <label htmlFor="name">이름</label>
          <input id="name" type="text" />
        </FormElement>
        <FormElement>
          <label htmlFor="age">나이</label>
          <input id="age" type="text" />
        </FormElement>
        <FormElement>
          <label htmlFor="mbti">MBTI</label>
          <input id="mbti" type="text" />
        </FormElement>
      </form>
      <Result>
        <p>이름 어쩌구 랄랄라 내용</p>
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
  }
`;
const Result = styled.div`
  display: flex;
`;

export default ClickToEdit;
