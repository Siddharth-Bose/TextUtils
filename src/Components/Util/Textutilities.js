import Card from "./Card";
import Button from "./Button";
import { useState } from "react";

export default function Textutilities(props) {
  const [text, setText] = useState("");
  const [copy,setCopy]= useState('');
  const handleUpperCase = () => {
    setCopy(text.toUpperCase());
  };
  const handleLowerCase = () => {
    setCopy(text.toLowerCase());
  };
  const handleWordCount = () => {
    let wordCount = text.trim().split(" ").length;
    document.getElementById("floatingTextarea2").value =
      "The word count is : " + wordCount.toString();
  };
  const handleCopyText = () => {
    let area = document.querySelector("#floatingTextarea1");
    area.select();
    document.execCommand("copy");
  };
  const handleCopyTextCopy = () => {
    let area = document.querySelector("#floatingTextarea2");
    area.select();
    document.execCommand("copy");
  };
  const handleSentenceCase = (event) => {
    const sentences = text.toLowerCase().split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
      sentences[i] = sentences[i].trim();
      sentences[i] = sentences[i][0].toUpperCase() + sentences[i].slice(1);
    }
    setCopy(sentences.join(". "));
  };
  const handleClearText = () => {
    setText('');
  };
  const handleAbbreviateName = () => {
    let abbreviatedName = "";
    const name = text.toUpperCase().trim().split(" ");
    for (let i = 0; i < name.length - 1; i++) {
      if(name[i]){
        abbreviatedName += name[i].trim()[0] + ". ";
      }
    }
    abbreviatedName += name.at(-1)[0] + name.at(-1).slice(1).toLowerCase();
    setCopy(abbreviatedName);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container mt-3">
        <Card style={{ backgroundColor: "rgba(14, 28, 109, 0.753)" }}>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Type in your text here."
              id="floatingTextarea1"
              rows="8"
              value={text}
              onChange={handleChange}
            ></textarea>
          </div>
        </Card>
      </div>
      <div className="container mt-3 text-center">
        <Button className="btn-outline-primary m-3" onClick={handleUpperCase}>
          Upper Case
        </Button>
        <Button className="btn-outline-success m-3" onClick={handleLowerCase}>
          Lower Case
        </Button>
        <Button className="btn-outline-danger m-3" onClick={handleWordCount}>
          {" "}
          Word Count
        </Button>
        <Button className="btn-outline-success m-3" onClick={handleCopyText}>
          Copy Your Text
        </Button>
        <Button className="btn-outline-danger m-3" onClick={handleClearText}>
          Clear Text
        </Button>
        <Button
          className="btn-outline-primary m-3"
          onClick={handleSentenceCase}
        >
          Sentence Case
        </Button>
        <Button
          className="btn-outline-success m-3"
          onClick={handleAbbreviateName}
        >
          Abbreviate Name
        </Button>
      </div>
      <div className="container mt-3">
        <Card style={{ backgroundColor: "seagreen" }}>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Type in your text here."
              id="floatingTextarea2"
              rows="8"
              value={copy}
              onChange={handleChange}
            ></textarea>
          </div>
        </Card>
      </div>
      <div className="container mt-3 text-center">
        <Button
          className="btn-outline-success m-3 fluid"
          onClick={handleCopyTextCopy}
        >
          Copy Converted Text
        </Button>
      </div>
    </>
  );
}
