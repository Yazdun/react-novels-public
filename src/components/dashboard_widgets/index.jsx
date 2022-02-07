import classNames from "classnames";
import { useEffect, useState } from "react";
import { BsHeartFill, BsStarFill } from "react-icons/bs";
import { FaFeather } from "react-icons/fa";
import { Heading, Spinner } from "../../elements";
import { useGet } from "../../hooks";
import { GET_USER_STATS } from "../../services";
import s from "./styles.module.scss";

export const DashboardWidgets = () => {
  const [stats, setStats] = useState({
    countReviews: 0,
    countLikes: 0,
    countStars: 0,
  });
  const { countReviews, countLikes, countStars } = stats;

  const handleStats = (data) => setStats(data.stats);

  const { getRequest, getLoading } = useGet();

  useEffect(() => {
    getRequest(GET_USER_STATS, handleStats);
  }, []);

  if (getLoading) {
    return (
      <Heading small center uppercase>
        <Spinner small />
        loading ...
      </Heading>
    );
  }
  return (
    <div className={s.wrapper}>
      <div className={classNames(s.widget, s.review)}>
        <FaFeather />
        <p>
          {countReviews === 0
            ? "no reviews"
            : `${countReviews} review${countReviews > 1 ? "s" : ""}`}
        </p>
      </div>
      <div className={classNames(s.widget, s.like)}>
        <BsHeartFill />
        <p>
          {countLikes === 0
            ? "no likes"
            : `${countLikes} like${countLikes > 1 ? "s" : ""}`}
        </p>
      </div>
      <div className={classNames(s.widget, s.star)}>
        <BsStarFill />
        <p>
          {countStars === 0
            ? "no stars"
            : `${countStars} star${countStars > 1 ? "s" : ""}`}
        </p>
      </div>
    </div>
  );
};
