import React, { useState } from "react";
import PropTypes from "prop-types";

export default function MyForm(props) {
  const [text, setText] = useState("");
  const [yourWord, setYourWord] = useState("");
  const [replaceWord, setreplaceWord] = useState("");
  const handleUpClick = () => {
    // let newText = text.toUpperCase();
    setText(text.toUpperCase());
    props.showAlert("Text Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    // console.log("UpperCase Was Clicked")
    // let newText = text.toLowerCase();
    setText(text.toLowerCase());
    props.showAlert("Text Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    // console.log("UpperCase Was Clicked")
    // let newText ="";
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!", "success");
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handleOriginalWord = (event) => {
    setYourWord(event.target.value);
  };

  const handleReplaceWord = (event) => {
    setreplaceWord(event.target.value);
  };
  const handleReplace = () => {
    const yWord = yourWord;
    const rWord = replaceWord;
    const inputText = text;
    console.log(yWord);
    const regex = new RegExp(yWord, "g");
    const replace = inputText.replace(regex, rWord);
    console.log(replace);
    setText(replace);
    props.showAlert("Text Replaced", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control border border-dark my-2"
            style={{
              backgroundColor: props.mode === "dark" ? "#4b4c50" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            id="myText"
            rows="3"
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-secondary mx-2 my-2"
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-secondary mx-2 my-2"
            onClick={handleLoClick}
          >
            Convert to lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-secondary mx-2 my-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-secondary mx-2 my-2"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summery</h2>
        <p>
          {
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters.
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes.
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>

      <div>
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <label htmlFor="wordReplace" className="form-label">
            Your Word
          </label>
          <input
            type="text"
            className="form-control border border-dark"
            style={{
              backgroundColor: props.mode === "dark" ? "#4b4c50" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={yourWord}
            onChange={handleOriginalWord}
            id="wordReplace"
            aria-describedby="emailHelp"
          />
        </div>
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <label htmlFor="replaceWith" className="form-label">
            Replace With
          </label>
          <input
            type="text"
            className="form-control border border-dark"
            style={{
              backgroundColor: props.mode === "dark" ? "#4b4c50" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={replaceWord}
            onChange={handleReplaceWord}
            id="replaceWith"
          />
        </div>
        {/* <button type="submit" className="btn btn-primary" onClick = {handleReplace(text, yourWord, replaceWord)}>Replace</button> */}
        {/* <button  className="btn btn-primary" onClick={() => handleReplace()}>Replace</button> */}
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={handleReplace}
        >
          {" "}
          Replace{" "}
        </button>
      </div>
    </>
  );
}

MyForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
MyForm.defaultProps = {
  heading: "Enter Text to Analyze",
};
// export default MyForm;
