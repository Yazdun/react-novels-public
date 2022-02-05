import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, Text } from "../../elements";
import { RenderNovelPreviews } from "../../components";
import { useGet } from "../../hooks";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { GET_ALL_NOVELS } from "../../services";

export const Home = () => {
  const { getRequest, getLoading } = useGet();
  const [novels, setNovels] = useState([]);

  const handleNovels = (data) => setNovels(data.novels);

  useEffect(() => {
    getRequest(GET_ALL_NOVELS, handleNovels);
  }, []);

  return (
    <>
      <Hero />
      <RenderNovelPreviews novels={novels} loading={getLoading} />
    </>
  );
};

const Hero = () => {
  return (
    <Container customclass={s.wrapper}>
      <div className={s.hero}>
        <Heading light uppercase customclass={s.heading} center big>
          Novels
        </Heading>
      </div>
    </Container>
  );
};
