import React from "react";
import ContactUsImg from "../assets/ContactUsImg.svg";
import "./index.css";
import { withTranslation } from "react-i18next";

const ContactUsSection = (props) => {
  const { t } = props;
  return (
    <div>
      <div className="contactus-section">
        <div className="contact-text-container">
          <div className="contactus-align">
            <div className="contact-main-text width100">
              {t("ContactUsSectionText1")}
            </div>
            <div className="contact-text width100">
              <div style={{ display: "flex", justifyContent: "center" }}>
                {t("ContactUsSectionText2")}
              </div>
            </div>
            <div
              className="diff-sec-button width100"
              style={{ marginTop: "16px" }}
            >
              <button className="contact-us-button">
                {t("BECOMEAPARTNER")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="contactus-img">
        <div></div>
        <div></div>
        <input placeholder="Name" className="contact-input" />
        <input placeholder="Prénom" className="contact-input" />
        <input
          placeholder="Votre message…"
          className="contact-input"
          style={{ border: "2px solid #ff8200", width: "300px" }}
        />
        <div className="contact-us-sec-button">
          <button className="devenir-lomads-button" style={{ width: "92px" }}>
            {t("SEND")}
          </button>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default withTranslation()(ContactUsSection);
