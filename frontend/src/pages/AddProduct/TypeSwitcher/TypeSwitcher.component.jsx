import "./TypeSwitcher.styles.scss";
import InputField from "../InputField/InputField.component";
import SelectInput from "../SelectInput/SelectInput.component";
import {
  productStructure,
  productType,
  types,
} from "../../../utils/productStructure";
const SelectedBox = ({ idName, description, children }) => {
  return (
    <div className="selected-box">
      <div id={idName}>{children}</div>
      <p className="description">description: {description}</p>
    </div>
  );
};

export default function TypeSwitcher({ type, errors, touched }) {
  return (
    <div className="type-switcher-container">
      <SelectInput
        idName={productStructure.type.idName}
        label={productStructure.type.label}
        name={productStructure.type.name}
        values={Object.values(productType)}
        errors={errors.type}
        isTouched={touched.type}
      />
      {types.map((value) => {
        return (
          type === value.name && (
            <SelectedBox
              key={value.idName}
              idName={value.idName}
              description={value.description}
            >
              {value.specificAttributes.map((attribute) => (
                <InputField
                  field={attribute}
                  key={attribute.idName}
                  idName={attribute.idName}
                  label={attribute.label + ` (${attribute.unit})`}
                  name={attribute.name}
                  errors={errors[attribute.name]}
                  isTouched={touched[attribute.name]}
                />
              ))}
            </SelectedBox>
          )
        );
      })}
    </div>
  );
}
