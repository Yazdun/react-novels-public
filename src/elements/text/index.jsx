import s from "./styles.module.scss";
import classnames from "classnames";

export const Text = ({
  children,
  customclass,
  success,
  danger,
  active,
  warn,
  secondary,
  small,
  light,
  medium,
  big,
  bold,
  thin,
  center,
}) => {
  return (
    <p
      className={classnames(
        s.text,
        customclass && customclass,
        success && s.success,
        danger && s.danger,
        active && s.active,
        light && s.light,
        warn && s.warn,
        secondary && s.secondary,
        small && s.small,
        medium && s.medium,
        big && s.big,
        bold && s.bold,
        thin && s.thin,
        center && s.center
      )}
    >
      {children}
    </p>
  );
};
