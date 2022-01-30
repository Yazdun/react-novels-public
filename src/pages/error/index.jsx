import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, Text } from "../../elements";

export const Error = ({ title, info }) => {
  return (
    <Container padding customclass={s.error}>
      <Heading capitalize danger>
        {title}
      </Heading>
      <Text center medium>
        {info}
      </Text>
      {/* {action && } */}
    </Container>
  );
};
