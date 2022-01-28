import s from "./styles.module.scss";
import { useFormContext } from "react-hook-form";
import { filterError, isError } from "./helpers";
import classnames from "classnames";
import { BsFillExclamationCircleFill } from "react-icons/bs";

export const Formfield = ({
  type,
  id,
  name,
  placeholder,
  validation,
  label,
  multiline,
  customclass,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const e = filterError({ errors, name });
  const isErr = isError(e);

  return (
    <div
      className={classnames(
        s.field,
        isErr && s.fieldErr,
        customclass && customclass
      )}
    >
      {multiline ? (
        <textarea
          className={classnames(s.textfield, s.textarea)}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        />
      ) : (
        <input
          className={classnames(s.textfield)}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        />
      )}

      <label className={classnames(s.label)} htmlFor={id}>
        {label}
      </label>
      {isErr && (
        <div className={s.err}>
          <BsFillExclamationCircleFill />
          <p>{e.error.message}</p>
        </div>
      )}
    </div>
  );
};
