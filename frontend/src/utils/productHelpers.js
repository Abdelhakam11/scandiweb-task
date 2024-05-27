import { attributeTypeName, productType } from "./productStructure";

export function deleteEmptyValues(values) {
  Object.keys(values).forEach((key) => {
    if (values[key] === "" || values[key] === null) {
      delete values[key];
    }
  });
}

export function setSpecificAttributeValue(values) {
  values.attribute_type_name = attributeTypeName[values.type];
  if (values.type === productType.Furniture) {
    values.attribute_type_value = `${Number(values.height)}x${Number(values.width)}x${Number(values.length)}`;
  } else {
    values.attribute_type_value = Number(values[values.attribute_type_name]);
  }
}

export function setFinalValues(values) {
  const newValues = {
    sku: values.sku,
    name: values.name,
    price: values.price,
    type: values.type,
    attribute_type_name: values.attribute_type_name,
    attribute_type_value: values.attribute_type_value,
  };
  return newValues;
}
