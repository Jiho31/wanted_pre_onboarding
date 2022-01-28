import "./App.css";
import React, { useState } from "react";
import Tab from "./component/Tab";

const tabElements = [
  { id: 0, content: "tab1" },
  { id: 1, content: "tab2" },
  { id: 2, content: "tab3" },
];

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const renderElement = (idx) => {
    setTabIndex(idx);
  };

  return (
    <div className="App">
      <header>
        <Tab tabEventHandler={renderElement} currentIndex={tabIndex} />
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
