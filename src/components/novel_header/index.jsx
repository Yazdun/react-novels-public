import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading } from "../../elements";
import { Link } from "react-router-dom";
import { AuthorCard } from "..";

export const NovelHeader = ({ novel }) => {
  const { image, title, authorInfo, pages, publish } = novel;
  return (
    <Container customclass={s.wrapper}>
      <img className={s.cover} src={image} alt="" />
      <div className={s.body}>
        <Heading uppercase medium center light customclass={s.title}>
          {title}
        </Heading>
        {authorInfo && <AuthorCard transparent author={authorInfo} />}
        <ul>
          <li>
            published : <span>{publish}</span>
          </li>
          <li>
            pages : <span>{pages}</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};
