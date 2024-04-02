import React from "react";
import { Tooltip } from "react-tooltip";
import "./styles.css";

export default function App() {
  const [text, setText] = React.useState("");
  const handleHighlight = (event) => {
    console.log("called");
    const highlightedText = window.getSelection().toString();
    console.log(highlightedText);
    setText(highlightedText);
  };
  return (
    <div className="App">
      <div
        className="container"
        onMouseMove={handleHighlight}
        onMouseLeave={handleHighlight}
      >
        <h1>
          Please select some text here & it will gonna be appear in tooltip
        </h1>
      </div>
      <Tooltip anchorSelect=".App" content={text} />
    </div>
  );
}
