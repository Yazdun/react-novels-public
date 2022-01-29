import s from "./styles.module.scss";
import classnames from "classnames";
import { Spinner } from "..";

export const Button = ({
  text,
  icon,
  disabled,
  active,
  success,
  danger,
  center,
  fullwidth,
  fixedwidth,
  customclass,
}) => {
  return (
    <button
      className={classnames(
        s.btn,
        text,
        icon,
        active && s.active,
        success && s.success,
        danger && s.danger,
        center && s.center,
        fullwidth && s.fullwidth,
        fixedwidth && s.fixedwidth,
        customclass && customclass
      )}
      disabled={disabled}
    >
      <div className={s.hover}></div>
      {disabled ? <Spinner small transparent /> : icon}
      {text}
    </button>
  );
};
