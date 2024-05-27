import { memo } from "react";
import "./ButtonsBox.styles.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton.component";

export default memo(function ButtonsBox({ buttons = [] }) {
  return (
    <div className="buttons-box">
      {buttons.map((btn, index) => (
        <PrimaryButton
          key={index}
          label={btn.label}
          handleClick={btn.handleClick}
          buttonType={btn.buttonType}
          formTarget={btn.formTarget}
        />
      ))}
    </div>
  );
});
