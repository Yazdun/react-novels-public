import s from "./styles.module.scss";
import classnames from "classnames";
import { Heading } from "../../elements";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const NovelCard = ({ novel }) => {
  const { image, title, likes } = novel;
  return (
    <div className={s.card}>
      <div className={s.cover}>
        <img src={image} alt={title} />
        <div className={s.like}>
          {likes.length}
          <BsHeartFill />
        </div>
      </div>
      <Heading capitalize small customclass={s.title}>
        {title}
      </Heading>
    </div>
  );
};

export const RenderNovelCards = ({ novels }) => {
  return (
    <div className={s.render}>
      {novels.map((novel) => {
        return (
          <Link to={`/novel/${novel._id}`} className={s.link}>
            <NovelCard novel={novel} />
          </Link>
        );
      })}
    </div>
  );
};
