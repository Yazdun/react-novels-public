import s from "./styles.module.scss";
import classnames from "classnames";
import { RenderText, Text } from "../../elements";
import { useGet } from "../../hooks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET_NOVEL_REVIEWS } from "../../services";
import { placeholder } from "../../assets";
import { Rate, UserCard } from "..";
export const NovelReviews = () => {
  const { getRequest, getLoading } = useGet();
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  const handleReviews = (data) => setReviews(data.reviews);

  useEffect(() => {
    getRequest(GET_NOVEL_REVIEWS(id), handleReviews);
  }, [id]);
  return (
    <div className={s.reviews}>
      <Text bold customclass={s.text}>
        What people think about this novel 👇
      </Text>
      {reviews.map((review) => {
        const { content, createdBy, createdAt, rate } = review;
        return (
          <div className={s.card}>
            <div className={s.header}>
              <UserCard userInfo={createdBy} time={createdAt} />
              <Rate rate={rate} mini />
            </div>
            <RenderText content={content.split("\n")} />
          </div>
        );
      })}
    </div>
  );
};
