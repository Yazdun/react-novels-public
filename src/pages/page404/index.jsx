import s from "./styles.module.scss";
import { Container, Heading, RenderText, Spinner, Text } from "../../elements";

export const Page404 = () => {
  return (
    <Container padding>
      <Heading uppercase danger center>
        not found !
      </Heading>
      <Text center medium>
        requested content either doesn't exist or has been deleted
      </Text>
    </Container>
  );
};
