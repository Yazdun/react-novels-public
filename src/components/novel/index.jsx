import s from "./styles.module.scss";
import classnames from "classnames";
import { Link } from "react-router-dom";

export const NovelCard = ({ novel }) => {
  const { image, title, author, _id } = novel;
  return (
    <Link to={`/novel/${_id}`}>
      <div className={s.novel}>
        <img src={image} alt={title} className={s.image} />
        <ul className={s.info}>
          <li className={s.title}>{title}</li>
          <li>{author}</li>
        </ul>
      </div>
    </Link>
  );
};
