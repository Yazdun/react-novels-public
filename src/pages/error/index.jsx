import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, Text } from "../../elements";

export const Error = ({ title, info }) => {
  return (
    <Container padding>
      <Heading>{title}</Heading>
      <Text>{info}</Text>
    </Container>
  );
};
