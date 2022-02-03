import s from "./styles.module.scss";
import classnames from "classnames";
import { Text } from "../../elements";

export const NovelReviews = () => {
  return (
    <div className={s.reviews}>
      {/* <h1>render some reviews</h1> */}
      <Text bold customclass={s.text}>
        What people think about this novel 👇
      </Text>
    </div>
  );
};
