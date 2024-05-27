import { memo } from "react";
import "./ProductCard.styles.scss";
import { useDispatch } from "react-redux";
import {
  addToDeletedProducts,
  removeFromDeletedProducts,
} from "../../../redux/deletedProductSlice";

export default memo(function ProductCard({ product }) {
  const dispatch = useDispatch();
  const {
    id,
    sku,
    name,
    price,
    attribute_type_name,
    attribute_type_value,
    attribute_unit_name,
  } = product;

  function handleChecked(e) {
    if (e.target.checked) {
      dispatch(addToDeletedProducts(id));
    } else {
      dispatch(removeFromDeletedProducts(id));
    }
  }

  return (
    <div className="product-card-container">
      <input
        type="checkbox"
        name="delete"
        className="product-card-container--check"
        onClick={(e) => handleChecked(e)}
      />
      <h4 className="product-card-container--sku">{sku}</h4>
      <h2 className="product-card-container--name">{name}</h2>
      <span className="product-card-container--price">{price} $</span>
      <span className="product-card-container--attribute-type">
        {attribute_type_name} : {attribute_type_value} {attribute_unit_name}
      </span>
    </div>
  );
});
