import HeroSec from "./Home/HeroSec";
import Features from "./Home/Features";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Home() {
  return(
  <>
    <HeroSec />
    <Features />
    <Container>
      <Button variant="outline-dark" className="btn-lg text-center w-100">
        Try out TextUtils Now &#128394;{" "}
      </Button>
    </Container>
  </>
  );
}
