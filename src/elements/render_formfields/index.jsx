import { Formfield } from "../formfield";
import s from "./styles.module.scss";

export const RenderFormfields = ({ formfields }) => {
  return (
    <>
      {formfields.map((formfield, index) => {
        const { type, id, name, placeholder, validation, label, multiline } =
          formfield;

        return (
          <Formfield
            key={index}
            type={type}
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            validation={validation}
            multiline={multiline ? true : false}
            customclass={multiline ? s.multiline : s.input}
          />
        );
      })}
    </>
  );
};
