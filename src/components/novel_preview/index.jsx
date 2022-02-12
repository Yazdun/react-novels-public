import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading } from "../../elements";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../../elements";

export const NovelPreview = ({ novel }) => {
  const { image, title, likes } = novel;
  return (
    <div className={s.card}>
      <div className={s.cover}>
        <img src={image} alt={title} />
        <div className={s.like}>
          <BsHeartFill />
          {likes.length}
        </div>
      </div>
      <Heading capitalize small customclass={s.title} center>
        {title}
      </Heading>
    </div>
  );
};

export const RenderNovelPreviews = ({ novels, loading }) => {
  let max = novels.length;
  const [count, setCount] = useState(8);

  if (loading) {
    return (
      <Container padding>
        <Loading height={825} />
      </Container>
    );
  }

  return (
    <>
      <div className={s.render}>
        {novels.slice(0, count).map((novel) => {
          return (
            <Link to={`/novel/${novel._id}`} className={s.link} key={novel._id}>
              <NovelPreview novel={novel} />
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
