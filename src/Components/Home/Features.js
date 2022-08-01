import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <>
      <div className={`container p-0 text-center my-5`}>
        <Card style={{ width: "18rem" }} className={`d-inline-block ${styles.blink}`}>
          <Card.Body className="bg-dark text-white">
            <Card.Title>Convert Your Text to UpperCase</Card.Title>
            <Card.Text>
              Easily paste your text in the editor, and convert it to Uppercase just with the Help of a Click.
            </Card.Text>
            <div className="text-center">
              <Button variant="secondary">Try it Out Now!</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className={`d-inline-block mx-3 ${styles.blink}`}>
          <Card.Body className="bg-dark text-white">
            <Card.Title>Convert Your to Sentence Case</Card.Title>
            <Card.Text>
                Easily paste your text in the editor, and convert it to Sentence Case just with the Help of a Click.
            </Card.Text>
            <div className="text-center">
              <Button variant="secondary">Try it Out Now!</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className={`d-inline-block mx-3 ${styles.blink}`}>
          <Card.Body className="bg-dark text-white">
            <Card.Title>Convert Your Text to Lowercase</Card.Title>
            <Card.Text>
                Easily paste your text in the editor, and convert it to Lowercase just with the Help of a Click.
            </Card.Text>
            <div className="text-center">
              <Button variant="secondary">Try it Out Now!</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className={`d-inline-block mx-3 ${styles.blink}`}>
          <Card.Body className="bg-dark text-white">
            <Card.Title>Various other case changing options</Card.Title>
            <Card.Text>
              Choose from variety of options to change the case of your text. Happy Formatting!
            </Card.Text>
            <div className="text-center">
              <Button variant="secondary">Try it Out Now!</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
