import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleTitleCase = () =>
    setText(text.replace(/\b\w/g, (match) => match.toUpperCase()));

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    // Optionally, you can show a notification or perform any other action after copying.
    // For example, you can use a library like react-toastify to display a notification message.
    // toast.success("Text copied to clipboard!");
  };

  const handleClear = () => {
    setText("");
  };

  const cleanedString = () => {
    const words_length =
      text === "" ? 0 : text.replace(/\s+/g, " ").trim().split(" ").length;

    const minutes_to_read = (0.008 * words_length).toFixed(4);

    const data = {
      text: text,
      words_length: words_length,
      minutes_to_read: minutes_to_read,
    };

    return data;
  };

  return (
    <div className={props.mode}>
      <div className="container pt-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          placeholder="Enter text here"
          onChange={handleOnChange}
        ></textarea>

        <div
          className="btn-group mt-2 flex flex-auto flex-wrap"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-primary bg-dark"
            onClick={handleUppercase}
          >
            UPPER CASE
          </button>
          <button
            type="button"
            className="btn btn-primary bg-dark"
            onClick={handleLowercase}
          >
            lower case
          </button>
          <button
            type="button"
            className="btn btn-primary bg-dark"
            onClick={handleTitleCase}
          >
            Capitalized Case
          </button>
          <button
            type="button"
            className="btn btn-primary bg-dark"
            onClick={handleCopyToClipboard}
          >
            Copy to Clipboard
          </button>
          <button
            type="button"
            className="btn btn-primary bg-dark"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

        <div className="alert alert-dark mt-5" role="alert">
          <h4>Your text summary</h4>
          <p>
            {cleanedString().words_length} words and {text.length} characters.
          </p>
          <p>
            Estimated reading time: {cleanedString().minutes_to_read} minutes.
          </p>
          <hr className="bg-primary"></hr>

          <h5>Preview</h5>
          <p style={{ overflowWrap: "break-word" }}>{cleanedString().text}</p>
        </div>
      </div>
    </div>
  );
}

export default TextForm;
