import "./App.css";
import React, { useState, useReducer, createContext } from "react";
import Tab from "./component/Tab";
import AutoComplete from "./component/AutoComplete";
import ModalButton from "./component/ModalButton";
import Modal from "./component/Modal";
import ClickToEdit from "./component/ClickToEdit";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

const tabElements = [
  { title: "Auto Complete", content: <AutoComplete /> },
  { title: "Modal", content: <ModalButton /> },
  { title: "Click to Edit", content: <ClickToEdit /> },
  { title: "Tag", content: <Tag /> },
  { title: "Toggle", content: <Toggle /> },
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
      <ModalContext.Provider value={{ modalDisplay, modalDispatch }}>
        <main>
          <div>{tabElements[tabIndex].content}</div>
        </main>
        <Modal />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
