import HeroSec from "./Home/HeroSec";
import Features from "./Home/Features";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate= useNavigate();
  const routeNavigate= ()=>{
      let path='/Util';
      console.log(path)
      navigate(path);
  };
  return(
  <div>
    <HeroSec />
    <Features onClick={routeNavigate}/>
    <Container>
      <Button variant="outline-dark" onClick={routeNavigate} className="btn-lg text-center w-100">
        Try out TextUtils Now &#128394;{" "}
      </Button>
    </Container>
  </div>
  );
}
