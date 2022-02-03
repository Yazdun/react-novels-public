import s from "./styles.module.scss";
import classnames from "classnames";
import { Container } from "../../elements";

export const Rate = ({ rate, basedOnReviews, mini }) => {
  switch (rate) {
    case 1:
      return (
        <div className={classnames(mini ? s.mini : s.big, s.awful)}>
          <h5 className={s.rate}>awful</h5>
          <p className={s.based}>
            based on {basedOnReviews}{" "}
            {basedOnReviews > 1 ? "reviews" : "review"}
          </p>
        </div>
      );

    case 2:
      return (
        <div className={classnames(mini ? s.mini : s.big, s.meh)}>
          <h5 className={s.rate}>meh !</h5>
          <p className={s.based}>
            {" "}
            based on {basedOnReviews}{" "}
            {basedOnReviews > 1 ? "reviews" : "review"}
          </p>
        </div>
      );

    case 3:
      return (
        <div className={classnames(mini ? s.mini : s.big, s.good)}>
          <h5 className={s.rate}>good</h5>
          <p className={s.based}>
            {" "}
            based on {basedOnReviews}{" "}
            {basedOnReviews > 1 ? "reviews" : "review"}
          </p>
        </div>
      );

    case 4:
      return (
        <div className={classnames(mini ? s.mini : s.big, s.great)}>
          <h5 className={s.rate}>great</h5>
          <p className={s.based}>
            {" "}
            based on {basedOnReviews}{" "}
            {basedOnReviews > 1 ? "reviews" : "review"}
          </p>
        </div>
      );

    case 5:
      return (
        <div className={classnames(mini ? s.mini : s.big, s.masterpiece)}>
          <h5 className={s.rate}>masterpiece</h5>
          <p className={s.based}>
            {" "}
            based on {basedOnReviews}{" "}
            {basedOnReviews > 1 ? "reviews" : "review"}
          </p>
        </div>
      );

    default:
      return (
        <div className={classnames(mini ? s.mini : s.big, s.na)}>
          <h5 className={s.rate}>N/A</h5>
        </div>
      );
  }
};
