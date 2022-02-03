import "./App.css";
import React, { useState, useReducer, createContext } from "react";
import Tab from "./component/Tab";
import AutoComplete from "./component/AutoComplete";
import ModalButton from "./component/ModalButton";
import Modal from "./component/Modal";
import ClickToEdit from "./component/ClickToEdit";

const tabElements = [
  { title: "Auto Complete", content: <AutoComplete /> },
  { title: "Modal", content: <ModalButton /> },
  { title: "Click to Edit", content: <ClickToEdit /> },
];

export const ModalContext = createContext();
const reducer = (state, action) => {
  switch (action) {
    case "show":
      return true;
    case "hide":
      return false;
    default:
      return state;
  }
};

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [modalDisplay, modalDispatch] = useReducer(reducer, false);

  const renderElement = (idx) => {
    setTabIndex(idx);
  };

  return (
    <div className="App">
      <header>
        <Tab
          tabEventHandler={renderElement}
          currentIndex={tabIndex}
          tabElements={tabElements}
        />
      </header>
      <ModalContext.Provider
        value={{ modalDisplay: modalDisplay, modalDispatch: modalDispatch }}
      >
        <main>
          <div>
            {tabElements[tabIndex].content}
            {/* 탭 내용 템플릿 */}
            {/* <article>ß
            <h1>title 1</h1>
            <section>content1</section>
          </article>
          <article>
            <h1>title 2</h1>
            <section>content2</section>
          </article> */}
          </div>
        </main>
        <Modal />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
