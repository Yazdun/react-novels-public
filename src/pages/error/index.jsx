import s from "./styles.module.scss";
import classnames from "classnames";
import { Button, Container, Heading, Text } from "../../elements";
import { Link, useHistory } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";

export const Error = ({ title, info }) => {
  const history = useHistory();
  return (
    <Container padding customclass={s.error}>
      <Heading capitalize danger>
        {title}
      </Heading>
      <Text center medium>
        {info}
      </Text>
      <Link to="/">
        <Button text="return to homepage" icon={<RiHome5Line />} />
      </Link>
    </Container>
  );
};
