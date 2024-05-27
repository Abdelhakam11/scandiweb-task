import React, { memo } from "react";
import "./PageLogo.styles.scss";

export default memo(function PageLogo({ title }) {
  return (
    <div className="page-logo-container">
      <h1 className="page-logo-container--title">{title}</h1>
    </div>
  );
});
