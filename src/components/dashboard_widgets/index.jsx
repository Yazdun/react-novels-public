import { useEffect, useState } from "react";
import { heart__1, pen__1, placeholder, star__1 } from "../../assets";
import { Loading } from "../../elements";
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
    return <Loading height={300} />;
  }
  return (
    <div className={s.wrapper}>
      <div className={s.widget}>
        <img src={pen__1} alt="pen" className={s.image} />
        <p>
          {countReviews === 0
            ? "no reviews"
            : `${countReviews} review${countReviews > 1 ? "s" : ""}`}
        </p>
      </div>
      <div className={s.widget}>
        <img src={heart__1} alt="heart" className={s.image} />
        <p>
          {countLikes === 0
            ? "no likes"
            : `${countLikes} like${countLikes > 1 ? "s" : ""}`}
        </p>
      </div>
      <div className={s.widget}>
        <img src={star__1} alt="star" className={s.image} />
        <p>
          {countStars === 0
            ? "no stars"
            : `${countStars} star${countStars > 1 ? "s" : ""}`}
        </p>
      </div>
    </div>
  );
};
