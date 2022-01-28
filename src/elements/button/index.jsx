import s from "./styles.module.scss";
import classnames from "classnames";

export const Button = ({
  children,
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
      {children}
    </button>
  );
};
