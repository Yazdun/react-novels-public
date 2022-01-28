import s from "./styles.module.scss";
import classnames from "classnames";

export const Container = ({ children, padding, customclass }) => {
  return (
    <div
      className={classnames(
        s.container,
        padding && s.padding,
        customclass && customclass
      )}
    >
      {children}
    </div>
  );
};
