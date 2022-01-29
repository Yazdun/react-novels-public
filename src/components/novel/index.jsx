import s from "./styles.module.scss";
import classnames from "classnames";
import { Heading } from "../../elements";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

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

export const RenderNovelCards = ({ novels, loading }) => {
  let max = novels.length;
  const [count, setCount] = useState(8);

  return (
    <>
      <div className={s.render}>
        {novels.slice(0, count).map((novel) => {
          return (
            <Link to={`/novel/${novel._id}`} className={s.link}>
              <NovelCard novel={novel} />
            </Link>
          );
        })}
        <button
          className={classnames(s.link, s.btn, count >= max && s.hide)}
          onClick={() => setCount(count + 9)}
        >
          Show more
        </button>
      </div>
    </>
  );
};
