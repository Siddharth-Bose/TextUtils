import Card from "./Card";
import Button from "./Button";

export default function Textutilities(props) {
  return (
  <>
  <div className="container mt-3">
    <Card style={{ backgroundColor:'rgba(14, 28, 109, 0.753)'}}>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Type in your text here."
          id="floatingTextarea2"
          rows="8"
        ></textarea>
      </div>
    </Card>
  </div>
  <div className="container mt-3 text-center">
    <Button className="m-3">Upper Case</Button>
    <Button className="m-3">Lower Case</Button>
    <Button className="m-3">Word Count</Button>
    <Button className="m-3">Copy Your Text</Button>
    <Button className="m-3">Clear Text</Button>
    <Button className="m-3">Sentence Case</Button>
    <Button className="m-3">Abbreviate Name</Button>
  </div>
  </>
  );
}
