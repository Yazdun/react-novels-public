import s from "./styles.module.scss";
import classnames from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useGet } from "../../hooks";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { GET_RELATED_NOVELS } from "../../services";
import { Heading, Loading, Text } from "../../elements";
import { Link } from "react-router-dom";

export const NovelSuggestion = () => {
  const [novels, setNovels] = useState([]);

  const handleNovels = (data) => {
    setNovels(data.relatedNovels);
  };

  const { id } = useParams();
  const history = useHistory();

  const { getRequest, getLoading } = useGet();

  useEffect(() => {
    getRequest(GET_RELATED_NOVELS(id), handleNovels);
  }, [id]);

  if (getLoading) {
    return <Loading height={500} />;
  }
  return (
    <div className={s.wrapper}>
      <Text bold customclass={s.text}>
        You may also be interested in 👇
      </Text>

      <Carousel
        showThumbs={false}
        className={s.carousel}
        centerMode
        centerSlidePercentage={90}
        onClickItem={(index, item) => history.push(`/novel/${item.key}`)}
      >
        {novels.map((novel) => {
          return (
            <div key={novel._id}>
              <img src={novel.image} className={s.image} />
              <Text bold customclass={s.legend}>
                {novel.title}

                <span>{novel.author}</span>
                <span>~ {novel.publish}</span>
              </Text>
            </div>
          );
        })}
      </Carousel>
      <div className={s.desktop}>
        {novels.map((novel) => {
          return (
            <div
              className={s.card}
              key={novel._id}
              onClick={() => {
                history.push(`/novel/${novel._id}`);
              }}
            >
              <img src={novel.image} className={s.cover} />
              <Text center bold customclass={s.legend}>
                {novel.title}

                <span>{novel.author}</span>
                <span>~ {novel.publish}</span>
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};
