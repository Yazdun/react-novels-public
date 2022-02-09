import s from "./styles.module.scss";
import classnames from "classnames";
import { Button, Container, Heading, Text } from "../../elements";
import { Link, useHistory } from "react-router-dom";
import { RiHome5Line, RiRefreshLine } from "react-icons/ri";

export const Error = ({ title, info }) => {
  return (
    <Container padding customclass={s.error}>
      <Heading uppercase danger>
        {title}
      </Heading>
      <Text center medium>
        {info}
      </Text>
      <Link to="/">
        <Button text="retry" icon={<RiRefreshLine />} />
      </Link>
    </Container>
  );
};
