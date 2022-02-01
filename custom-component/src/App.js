import "./App.css";
import React, { useState } from "react";
import Tab from "./component/Tab";
import AutoComplete from "./component/AutoComplete";
import Modal from "./component/Modal";

const tabElements = [
  { title: "Auto Complete", content: <AutoComplete /> },
  { title: "Modal", content: <Modal /> },
  { title: 2, content: "tab3" },
];

function App() {
  const [tabIndex, setTabIndex] = useState(0);

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
      <main>
        <div>
          {tabElements[tabIndex].content}
          {/* 탭 내용 템플릿 */}
          {/* <article>
            <h1>title 1</h1>
            <section>content1</section>
          </article>
          <article>
            <h1>title 2</h1>
            <section>content2</section>
          </article> */}
        </div>
      </main>
    </div>
  );
}

export default App;
