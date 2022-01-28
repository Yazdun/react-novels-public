import s from "./styles.module.scss";
import classnames from "classnames";

export const Heading = ({
  children,
  danger,
  success,
  active,
  secondary,
  light,
  big,
  medium,
  small,
  thin,
  center,
  capitalize,
  uppercase,
}) => {
  return (
    <h1
      className={classnames(
        s.heading,
        danger && s.danger,
        success && s.success,
        active && s.active,
        secondary && s.secondary,
        big && s.big,
        light && s.light,
        medium && s.medium,
        small && s.small,
        thin && s.thin,
        center && s.center,
        capitalize && s.capitalize,
        uppercase && s.uppercase
      )}
    >
      {children}
    </h1>
  );
};
