import s from "./styles.module.scss";
import { Container, Heading } from "../../elements";
import { AuthorPreview, Rate } from "..";
import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { useNoticesContext, useAuthContext } from "../../context";
import { usePatch } from "../../hooks";
import { LIKE_NOVEL } from "../../services";

export const NovelHeader = ({ novel }) => {
  const {
    _id,
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
  const isLoggedIn = useAuthContext();
  const { showAlert } = useNoticesContext();

  const handleLike = (data) => {
    setLikesCount(data.likesCount);
  };

  const { patchRequest, patchLoading } = usePatch();

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
        <button
          className={s.likes}
          disabled={patchLoading}
          onClick={() => {
            isLoggedIn
              ? patchRequest(LIKE_NOVEL(_id), {}, handleLike)
              : showAlert(
                  "authentication required",
                  `In order to leave a like for ${title.toUpperCase()}, you must first login to your account or join us as a new member `
                );
          }}
        >
          <BsHeartFill />
          {likesCount}
        </button>
      </div>
    </Container>
  );
};
