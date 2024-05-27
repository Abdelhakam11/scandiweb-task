import React, { memo } from "react";
import "./PrimaryButton.styles.scss";

export default memo(function PrimaryButton({
  label,
  handleClick = false,
  buttonType = "button",
  formTarget = false,
}) {
  return (
    <>
      <button
        form={formTarget ? "product_form" : null}
        className="primary-button"
        type={buttonType}
        onClick={handleClick ? () => handleClick() : () => true}
      >
        {label}
      </button>
    </>
  );
});
