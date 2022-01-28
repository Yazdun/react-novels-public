import s from "./styles.module.scss";
import classnames from "classnames";
import { FaSwatchbook } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div className={s.logo}>
        <FaSwatchbook />
      </div>
    </Link>
  );
};
