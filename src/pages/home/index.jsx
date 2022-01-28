import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, Text } from "../../elements";

export const Home = () => {
  return (
    <Container padding>
      <Heading uppercase>Homepage</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim
        qui nisi quis odio itaque beatae corrupti dolore, ut deserunt.
      </Text>
    </Container>
  );
};
