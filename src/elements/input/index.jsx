import s from "./styles.module.scss";
import classnames from "classnames";

export const Input = ({ type, id, name, placeholder, label, onChange }) => {
  return (
    <div className={classnames(s.field)}>
      <input
        className={classnames(s.input)}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />

      <label className={classnames(s.label)} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
