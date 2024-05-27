import { Field } from "formik";
import "./InputField.styles.scss";

export default function InputField({
  field,
  errors = false,
  isTouched = false,
}) {
  const { idName, label, name } = field;
  return (
    <div className="input-container">
      <label htmlFor={idName}>{label} </label>
      <Field
        id={idName}
        name={name}
        placeholder={`${name}..`}
        className="input-container--box"
      />

      {errors && isTouched ? (
        <div className="error-message">* {errors}</div>
      ) : null}
    </div>
  );
}
