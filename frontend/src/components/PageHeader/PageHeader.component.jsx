import { memo } from "react";
import "./PageHeader.styles.scss";
import PageLogo from "../PageLogo/PageLogo.component";

export default memo(function PageHeader({ title, children }) {
  return (
    <div className="page-header-container">
      <PageLogo title={title} />
      {children}
    </div>
  );
});
