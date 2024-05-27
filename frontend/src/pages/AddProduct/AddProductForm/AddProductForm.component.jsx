import "./AddProductForm.styles.scss";

import { Formik, Form } from "formik";
import { useCallback, useState } from "react";

import InputField from "../InputField/InputField.component";
import TypeSwitcher from "../TypeSwitcher/TypeSwitcher.component";

import addProductSchema from "../../../validation/addPoductSchema";
import initialValues from "../../../validation/productInitialValues";
import {
  deleteEmptyValues,
  setSpecificAttributeValue,
  setFinalValues,
} from "../../../utils/productHelpers";
import { productStructure } from "../../../utils/productStructure";
import { apiUrl, postData } from "../../../utils/apis";

export default function AddProductForm({ goToProductslist }) {
  const [type, setType] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = useCallback(
    async (values, { setFieldError }) => {
      setFormError(null);
      deleteEmptyValues(values);
      setSpecificAttributeValue(values);
      const valuesToPost = setFinalValues(values);

      await postData(apiUrl.postProduct, valuesToPost, "text/plain")
        .then(goToProductslist)
        .catch(function (error) {
          if (error.response) {
            const keys = Object.keys(error.response.data);
            keys.forEach((key) => {
              setFieldError(key, error.response.data[key]);
            });
          } else {
            setFormError(error.message + ", try to post again");
          }
        });
    },
    [goToProductslist]
  );
  const handleChange = (e) => {
    if (e.target.name === productStructure.type.name) {
      setType(e.target.value);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={addProductSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          return (
            <Form
              className="add-product-form"
              id="product_form"
              onChange={(e) => handleChange(e)}
            >
              {formError ? (
                <div className="error-message">* {formError}</div>
              ) : null}

              <InputField
                field={productStructure.sku}
                errors={errors.sku}
                isTouched={touched.sku}
              />
              <InputField
                field={productStructure.name}
                errors={errors.name}
                isTouched={touched.name}
              />
              <InputField
                field={productStructure.price}
                errors={errors.price}
                isTouched={touched.price}
              />
              <TypeSwitcher type={type} errors={errors} touched={touched} />
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
