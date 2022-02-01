import React from "react";
import styled from "styled-components";

const Tab = ({ tabEventHandler, currentIndex, tabElements }) => {
  const onClickHandler = (idx) => {
    tabEventHandler(idx);
  };

  return (
    <NavTab>
      <ul>
        {tabElements.map((data, idx) => {
          return (
            <TabElement
              className={currentIndex === idx ? "isActive" : ""}
              onClick={() => onClickHandler(idx)}
            >
              {data.title}
            </TabElement>
          );
        })}
      </ul>
    </NavTab>
  );
};

const NavTab = styled.nav`
  width: 900px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 1px solid #e0e0e0;

  ul {
    display: flex;
    flex-direction: row;
  }
`;
const TabElement = styled.li`
  padding: 10px 20px;
  border: 2px solid #fff;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    border-bottom: 2px solid #d9d9d9;
  }

  &.isActive {
    border-bottom: 2px solid #ffd952;
  }
`;

export default Tab;
