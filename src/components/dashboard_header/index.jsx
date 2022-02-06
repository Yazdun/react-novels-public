import { placeholder } from "../../assets";
import { Button, Heading } from "../../elements";
import s from "./styles.module.scss";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

export const DashboardHeader = ({ user }) => {
  const { username, email, image } = user;
  return (
    <div className={s.header}>
      <img
        src={image ? image : placeholder}
        alt={username}
        className={s.image}
      />

      <ul className={s.info}>
        <li>
          <AiOutlineUser />
          {username}
        </li>
        <li>
          <HiOutlineMail />
          {email}
        </li>
      </ul>
      <Link to="/setting" className={s.settings}>
        <AiOutlineSetting />
      </Link>
    </div>
  );
};
