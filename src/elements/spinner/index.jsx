import s from "./styles.module.scss";
import classnames from "classnames";

export const Spinner = ({ small, transparent, medium, center }) => {
  return (
    <svg
      className={classnames(
        s.spinner,
        small && s.small,
        medium && s.medium,
        center && s.center
      )}
      viewBox="0 0 50 50"
    >
      <circle
        className={classnames(s.path, transparent && s.transparent)}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </svg>
  );
};
