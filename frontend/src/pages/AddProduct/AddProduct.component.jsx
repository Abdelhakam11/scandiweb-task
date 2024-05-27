import "./AddProduct.styles.scss";
import { useMemo } from "react";

import PageHeader from "../../components/PageHeader/PageHeader.component";
import ButtonsBox from "../../components/ButtonsBox/ButtonsBox.component";
import AddProductForm from "./AddProductForm/AddProductForm.component";

import useNavigateTo from "../../hooks/NavigateHook";
import { paths } from "../../utils/routes";

export default function AddProduct() {
  const goToProductslist = useNavigateTo(paths.home);
  const children = useMemo(
    () => (
      <ButtonsBox
        buttons={[
          {
            label: "save",
            buttonType: "submit",
            formTarget: "product_form",
          },
          { label: "cancel", handleClick: goToProductslist },
        ]}
      />
    ),
    [goToProductslist]
  );

  return (
    <div className="add-product-container">
      <PageHeader title="add product">{children}</PageHeader>
      <AddProductForm goToProductslist={goToProductslist} />
    </div>
  );
}
