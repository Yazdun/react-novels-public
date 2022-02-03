import s from "./styles.module.scss";
import classnames from "classnames";
import { placeholder } from "../../assets";
import ReactTimeAgo from "react-time-ago";

export const UserCard = ({ userInfo, time }) => {
  const { image, username } = userInfo;
  return (
    <div className={s.user}>
      <div className={s.info}>
        <img
          src={image ? image : placeholder}
          alt={username}
          className={s.image}
        />
        <ul>
          <li className={s.username}>{username}</li>
          <li className={s.time}>
            <ReactTimeAgo date={time} locale="en-US" />
          </li>
        </ul>
      </div>
    </div>
  );
};
