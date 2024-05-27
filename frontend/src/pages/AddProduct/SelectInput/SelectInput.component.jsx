import { Field } from "formik";
import "./SelectInput.styles.scss";

export default function SelectInput({
  idName,
  label,
  name,
  values = [],
  errors,
  isTouched,
}) {
  return (
    <>
      <div className="select-input-container">
        <label htmlFor={idName}>{label} </label>
        <Field
          className="select-input-container--box"
          id={idName}
          as="select"
          name={name}
        >
          <option
            className="select-input-container--box--option"
            value=""
            hidden
          >
            Please Choose...
          </option>
          {values.map((value, index) => (
            <option
              key={index}
              className="select-input-container--box--option"
              value={value}
              id={value}
            >
              {value.toUpperCase()}
            </option>
          ))}
        </Field>
      </div>
      {errors && isTouched ? (
        <div className="error-message">{errors}</div>
      ) : null}
    </>
  );
}
