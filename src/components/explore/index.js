import React from "react";
import ImgUrl1 from "../assets/explore-bottom-img1.svg";
import ImgUrl2 from "../assets/explore-bottom-img2.svg";
import ImgUrl3 from "../assets/explore-bottom-img3.svg";
import MobileImg from "../assets/phone-background-img.svg";
import "./index.css";
import { withTranslation } from "react-i18next";

function Explore(props) {
  const { t } = props;
  return (
    <div className="explore">
      <div className="dummy-text mobile-text">{t("exploreText1")}</div>
      <div className="dummy-text1 mobile-text">{t("exploreText2")}</div>
      <div className="dummy-text2 mobile-text">
        <div className="home-text3 mobile-text">{t("exploreText3")}</div>
        <div className="home-text4-center">
          <div className="home-text4">{t("exploreText4")}</div>
        </div>
      </div>
      <div className="bg-section">
        <div className="empty-phone">
          {/* <div className="mobile-img"> */}
            <img src={MobileImg} alt="MobileImg" className="mobile-img"/>
          {/* </div> */}
        </div>
      </div>
      <div
        className="explore-bottom"
        style={{ zIndex: "2", backgroundColor: "white" }}
      >
        <div style={{ zIndex: "2", backgroundColor: "white" }}>
          <div className="img-container">
            <img src={ImgUrl1} alt="desc" />
          </div>
          <div className="text-center">
            <div className="explore-bottom-text1">{t("FindYourCommunity")}</div>

            <div className="find-community-text-align">
              <div className="find-community-text">
                {t("FindYourCommunityText")}
              </div>
            </div>
          </div>
        </div>
        <div style={{ zIndex: "2", backgroundColor: "white" }}>
          <div className="img-container">
            <img src={ImgUrl2} alt="desc" />
          </div>

          <div className="text-center">
            <div className="explore-bottom-text1">{t("StayInTouch")}</div>

            <div className="find-community-text-align">
              <div className="find-community-text">{t("StayInTouchText")}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="img-container">
            <img src={ImgUrl3} alt="desc" />
          </div>
          <div className="text-center">
            <div className="explore-bottom-text1">{t("GrowTogether")}</div>

            <div className="find-community-text-align">
              <div className="find-community-text">{t("GrowTogetherText")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Explore);
