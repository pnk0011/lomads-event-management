import React from "react";
import { withTranslation } from "react-i18next";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";

const NewsSection = (props) => {
  const { t } = props;
  return (
    <div className="news-section">
      <div className="news-desc">
        <p className="news-desc-text">{t("LatestNews")}</p>
      </div>
      <div className="news-img-container">
        <div className="news-img"></div>
        <div className="news-img"></div>
        <div className="news-img"></div>
      </div>
      <div className="diff-sec-button">
        <button className="devenir-lomads-button">{t("MORENEWS")}</button>
      </div>

      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default withTranslation()(NewsSection);
