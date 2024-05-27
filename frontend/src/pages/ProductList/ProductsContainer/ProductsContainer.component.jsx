import { memo } from "react";
import ProductCard from "../ProductCard/ProductCard.component";
import "./ProductsContainer.styles.scss";

const customComparator = (prevProps, nextProps) => {
  return nextProps.post === prevProps.post;
};

const ProductsContainer = function ({ products=[] }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default memo(ProductsContainer, customComparator);
