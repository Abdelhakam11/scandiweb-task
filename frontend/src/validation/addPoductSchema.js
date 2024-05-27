import * as Yup from "yup";
import { productStructure, productType } from "../utils/productStructure";

const checkTwoDigisAfterComma = (val) => {
  const patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;
  if (val !== undefined) {
    return patternTwoDigisAfterComma.test(val);
  }
  return true;
};

const addProductSchema = Yup.object().shape({
  sku: Yup.string().min(6).max(50).required(),
  name: Yup.string().min(5).max(50).required(),
  price: Yup.number()
    .typeError("price must be a number")
    .positive()
    .required()
    .test(
      "is-decimal",
      "The amount should be a decimal with maximum two digits after comma",
      checkTwoDigisAfterComma
    ),

  type: Yup.string().oneOf(Object.values(productType)).required(),

  attribute_type_name: Yup.string(),

  size: Yup.number()
    .integer()
    .positive()
    .typeError("size must be a number")
    .when(productStructure.type.name, {
      is: (value) => value === productType.Dvd,
      then: (schema) => schema.required(),
    }),

  width: Yup.number()
    .positive()
    .typeError("width must be a number")
    .when(productStructure.type.name, {
      is: (value) => value === productType.Furniture,
      then: (schema) => schema.required(),
    })
    .test(
      "is-decimal",
      "The amount should be a decimal with maximum two digits after comma",
      checkTwoDigisAfterComma
    ),

  height: Yup.number()
    .positive()
    .typeError("height must be a number")
    .when(productStructure.type.name, {
      is: (value) => value === productType.Furniture,
      then: (schema) => schema.required(),
    })
    .test(
      "is-decimal",
      "The amount should be a decimal with maximum two digits after comma",
      checkTwoDigisAfterComma
    ),

  length: Yup.number()
    .positive()
    .typeError("length must be a number")
    .when(productStructure.type.name, {
      is: (value) => value === productType.Furniture,
      then: (schema) => schema.required(),
    })
    .test(
      "is-decimal",
      "The amount should be a decimal with maximum two digits after comma",
      checkTwoDigisAfterComma
    ),

  weight: Yup.number()
    .positive()
    .typeError("weight must be a number")
    .when(productStructure.type.name, {
      is: (value) => value === productType.Book,
      then: (schema) => schema.required(),
    })
    .test(
      "is-decimal",
      "The amount should be a decimal with maximum two digits after comma",
      checkTwoDigisAfterComma
    ),
});
export default addProductSchema;
