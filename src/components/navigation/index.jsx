import s from "./styles.module.scss";
import classnames from "classnames";
import { Button, Container } from "../../elements";
import { GiBurningBook } from "react-icons/gi";
import { Logo } from "../";
import { useAuthContext } from "../../context";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const isLoggedIn = useAuthContext();
  return (
    <Container padding customclass={s.navigation}>
      <Logo />
      {isLoggedIn ? (
        <p>logged in</p>
      ) : (
        <div className={s.links}>
          <Link className={s.link} to="/join">
            join
          </Link>
          <hr className={s.vl} />
          <Link className={s.link} to="/login">
            login
          </Link>
        </div>
      )}
    </Container>
  );
};
