import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, RenderText, Text } from "../../elements";
import { NovelHeader, ReviewCard } from "../../components";
import { Link, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGet } from "../../hooks";
import { GET_SINGLE_NOVEL } from "../../services";

export const Novel = () => {
  const { id } = useParams();
  const [novel, setNovel] = useState({ description: "" });
  const { getRequest, getLoading } = useGet();

  const handleNovel = (data) => setNovel(data.novel);

  useEffect(() => {
    getRequest(GET_SINGLE_NOVEL(id), handleNovel);
  }, []);
  return (
    <Container customclass={s.wrapper}>
      <NovelHeader novel={novel} />
      <div className={s.rendertext}>
        <RenderText
          content={novel.description.split("\n")}
          customclass={s.rendertext}
        />
      </div>
    </Container>
  );
};
