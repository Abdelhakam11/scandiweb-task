import "./ProductList.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react";

import ButtonsBox from "../../components/ButtonsBox/ButtonsBox.component.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.component.jsx";
import ProductsContainer from "./ProductsContainer/ProductsContainer.component";

import useFetch from "../../hooks/FetchHook.js";
import useNavigateTo from "../../hooks/NavigateHook.js";

import { apiUrl, postData } from "../../utils/apis.js";
import { removeFromDeletedProducts } from "../../redux/deletedProductSlice";
import { paths } from "../../utils/routes.js";

export default function ProductList() {
  const dispatch = useDispatch();

  const {
    data: products,
    loading,
    error,
    refetchData,
  } = useFetch(apiUrl.getProducts);

  const toAddProduct = useNavigateTo(paths.addProduct);

  const deletedIds = useSelector(
    (state) => state.deletedProducts.deletedProducts
  );

  const deletedHandle = useCallback(async () => {
    await postData(
      apiUrl.deleteProducts,
      { ids: deletedIds },
      "text/plain"
    ).then(() => {
      deletedIds.map((id) => {
        dispatch(removeFromDeletedProducts(id));
        return true;
      });

      refetchData();
    });
  }, [deletedIds, dispatch, refetchData]);

  const children = useMemo(
    () => (
      <ButtonsBox
        buttons={[
          { label: "add", handleClick: toAddProduct },
          { label: "mass delete", handleClick: deletedHandle },
        ]}
      />
    ),
    [toAddProduct, deletedHandle]
  );
  return (
    <div className="product-list-container">
      <PageHeader title="product list">{children}</PageHeader>
      {error ? (
        <div className="error-message">
          Error: {error.message}, try to reload page
        </div>
      ) : !loading ? (
        <>
          <ProductsContainer products={products} />
        </>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}
