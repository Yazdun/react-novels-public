import { BsFillExclamationCircleFill } from "react-icons/bs";
import s from "./styles.module.scss";

export const RenderErrors = ({ errors }) => {
  return (
    <div className={s.wrapper}>
      {errors.map((error, index) => {
        return (
          <div key={index} className={s.err}>
            <BsFillExclamationCircleFill />
            <p>{error}</p>
          </div>
        );
      })}
    </div>
  );
};
