import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { withTranslation } from "react-i18next";
function MenuContent(props) {
  const { t } = props;
  return (
    <div className="menu-content-container">
      <div className="content-wrapper">
        <Link to="/quality">
          <div className="content-style"> {t("ReasonForBeing")}</div>
        </Link>
        <Link to="/partner">
          <div className="content-style">{t("BecomeAnOrganizer")}</div>
        </Link>
        <Link to="/news">
          <div className="content-style">{t("News")}</div>
        </Link>
        <Link to="/rejoin">
          <div className="content-style">{t("JoinUs")}</div>
        </Link>
        <Link to="/">
          <div className="content-style">Contact</div>
        </Link>
      </div>
    </div>
  );
}

export default withTranslation()(MenuContent);
