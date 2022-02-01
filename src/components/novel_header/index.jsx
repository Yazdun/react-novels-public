import s from "./styles.module.scss";
import { Container, Heading } from "../../elements";
import { AuthorPreview, Rate } from "..";

export const NovelHeader = ({ novel }) => {
  const { image, title, authorInfo, pages, publish, rate, basedOnReviews } =
    novel;

  return (
    <Container customclass={s.wrapper}>
      <img className={s.cover} src={image} alt="" />
      <div className={s.body}>
        <Heading uppercase medium center light customclass={s.title}>
          {title}
        </Heading>
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
      </div>
    </Container>
  );
};
