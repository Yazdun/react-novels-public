import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, Text } from "../../elements";

export const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

const Hero = () => {
  return (
    <Container customclass={s.wrapper}>
      <div className={s.hero}>
        <Heading light uppercase customclass={s.heading} center big>
          Novels
        </Heading>
      </div>
    </Container>
  );
};
