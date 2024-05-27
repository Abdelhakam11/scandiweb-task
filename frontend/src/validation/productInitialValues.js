import { productStructure } from "../utils/productStructure";

let initialValues = {};

for (const key in productStructure) {
  if (productStructure.hasOwnProperty(key)) {
    if (key === "type") {
      for (const type of productStructure.type.types) {
        for (const specificAttribute of type.specificAttributes) {
          initialValues[specificAttribute.name] = "";
        }
      }
    } else {
      initialValues[key] = "";
    }
  }
}

export default initialValues;
