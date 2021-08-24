import React from "react";
import ChevronLeft from "../assets/chevron-left.svg";
import ChevronRight from "../assets/chevron-right.svg";
import Card from "./card";
import EventsBorderTop from "../assets/events-border-top.svg";
import EventsBorderBottom from "../assets/events-border-bottom.svg";
import "./index.css";
import { withTranslation } from "react-i18next";

const EventsSection = (props) => {
  const { t } = props;
  return (
    <div className="events-section">
      <img
        className="events-top-border"
        src={EventsBorderTop}
        alt="border top"
      />
      <div className="events-desc">
        <p className="events-desc-text">{t("EventsSectionText1")}</p>
      </div>
      <div className="card-slider-container">
        <div className="card-container">
          <div>
            <Card />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Card />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Card />
          </div>
        </div>
        <div className="card-slider">
          <div className="arrow-icon">
            <img src={ChevronLeft} alt="ChevronLeft" height="37px" />
          </div>
          <div className="arrow-icon">
            <img src={ChevronRight} alt="ChevronRight" height="37px" />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "50px" }}>
        <img
          className="comment-bott-border"
          src={EventsBorderBottom}
          alt="border top"
        />
      </div>
    </div>
  );
};

export default withTranslation()(EventsSection);
