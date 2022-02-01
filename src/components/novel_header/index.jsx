import s from "./styles.module.scss";
import { Container, Heading } from "../../elements";
import { AuthorPreview, Rate } from "..";
import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";

export const NovelHeader = ({ novel }) => {
  const {
    image,
    title,
    authorInfo,
    pages,
    publish,
    rate,
    basedOnReviews,
    likes,
  } = novel;
  const [likesCount, setLikesCount] = useState(likes.length);

  return (
    <Container customclass={s.wrapper}>
      <img className={s.cover} src={image} alt="" />
      <Heading uppercase medium center light customclass={s.title}>
        {title}
      </Heading>
      <div className={s.body}>
        {authorInfo && <AuthorPreview transparent author={authorInfo} />}
        <ul>
          <li>
            published : <span>{publish}</span>
          </li>
          <li>
            pages : <span>{pages}</span>
          </li>
        </ul>
        <Rate rate={rate} basedOnReviews={basedOnReviews} />
        <button className={s.likes}>
          <BsHeartFill />
          {likesCount}
        </button>
      </div>
    </Container>
  );
};
