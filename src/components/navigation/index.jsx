import s from "./styles.module.scss";
import { Container } from "../../elements";
import { RiNotification3Line } from "react-icons/ri";
import { Logo } from "../";
import { useAuthContext } from "../../context";
import { Link } from "react-router-dom";
import { UserPopup } from "../user_popup";

export const Navigation = () => {
  const isLoggedIn = useAuthContext();

  return (
    <Container padding customclass={s.navigation}>
      <Logo />
      {isLoggedIn ? <User /> : <NoUser />}
    </Container>
  );
};

const User = () => {
  return (
    <div className={s.user}>
      <Link to="/notifications">
        <RiNotification3Line />
      </Link>
      <UserPopup />
    </div>
  );
};

const NoUser = () => {
  return (
    <div className={s.links}>
      <Link className={s.link} to="/join">
        join
      </Link>
      <hr className={s.vl} />
      <Link className={s.link} to="/login">
        login
      </Link>
    </div>
  );
};
