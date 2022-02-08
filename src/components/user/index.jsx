import s from "./styles.module.scss";
import classnames from "classnames";
import { placeholder } from "../../assets";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";

export const UserCard = ({ userInfo, time }) => {
  const { image, username, _id } = userInfo;
  return (
    <Link to={`/user/${_id}`}>
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
    </Link>
  );
};
