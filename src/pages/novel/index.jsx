import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, RenderText, Spinner, Text } from "../../elements";
import {
  NovelHeader,
  NovelReviews,
  NovelSuggestion,
  WriteReview,
} from "../../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGet } from "../../hooks";
import { GET_SINGLE_NOVEL } from "../../services";

export const Novel = () => {
  const { id } = useParams();
  const [novel, setNovel] = useState({ description: "", likes: [] });
  const { getRequest, getLoading } = useGet();

  const handleNovel = (data) => setNovel(data.novel);

  useEffect(() => {
    getRequest(GET_SINGLE_NOVEL(id), handleNovel);
  }, [id]);

  if (getLoading) {
    return <Spinner center />;
  }
  return (
    <>
      <Container customclass={s.wrapper}>
        <NovelHeader novel={novel} />
        <div className={s.rendertext}>
          <RenderText
            content={novel.description.split("\n")}
            customclass={s.rendertext}
          />
        </div>
      </Container>
      <NovelSuggestion />
      <Container customclass={s.wrapper}>
        <WriteReview novelId={id} novelTitle={novel.title} />
        <hr className="hr" />
        <NovelReviews />
      </Container>
    </>
  );
};
