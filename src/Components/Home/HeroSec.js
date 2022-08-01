import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import styles from './HeroSec.module.css';

const HeroSec = () => {
  return (
    <Container className={`my-3 ${styles.bgNavy} text-center`}>
      <Image className={`${styles.float} m-5`}
        src="Images/HeroSecImg1.png"
        roundedCircle
      />
      <Image className={`${styles.float} m-5`}
        src="Images/HeroSecImg2.png"
        roundedCircle
      />
      <Image className={`${styles.float} m-5`}
        src="Images/HeroSecImg3.png"
        roundedCircle
      />
    </Container>
  );
};

export default HeroSec;
