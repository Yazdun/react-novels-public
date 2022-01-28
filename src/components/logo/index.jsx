import s from "./styles.module.scss";
import classnames from "classnames";
import { GiBurningBook } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div className={s.logo}>
        <GiBurningBook />
      </div>
    </Link>
  );
};
