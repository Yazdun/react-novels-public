import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, RenderText, Spinner } from "../../elements";
import { AuthorInfo, RenderNovelPreviews } from "../../components";
import { useGet } from "../../hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR, GET_AUTHOR_NOVELS } from "../../services";

export const Author = () => {
  const { getRequest, getLoading } = useGet();
  const [author, setAuthor] = useState({
    name: "",
    birth: "",
    death: "",
    image: "",
    nationality: "",
    bio: "",
    stars: [],
  });
  const hanldeAuthor = (data) => setAuthor(data.author);
  const { id } = useParams();

  useEffect(() => {
    getRequest(GET_AUTHOR(id), hanldeAuthor);
  }, [id]);

  if (getLoading) {
    return <Spinner center />;
  }

  return (
    <>
      <Container padding customclass={s.info}>
        <AuthorInfo author={author} />
        <div className={s.text}>
          <Heading center uppercase customclass={s.header}>
            biography
          </Heading>
          <RenderText content={author.bio.split("\n")} />
        </div>
      </Container>
      <NovelGraphy />
    </>
  );
};

const NovelGraphy = () => {
  const [novels, setNovels] = useState([]);
  const { getRequest, getLoading } = useGet();
  const { id } = useParams();

  const handleNovels = (data) => setNovels(data.novels);

  useEffect(() => {
    getRequest(GET_AUTHOR_NOVELS(id), handleNovels);
  }, [id]);

  return <RenderNovelPreviews novels={novels} loading={getLoading} />;
};
