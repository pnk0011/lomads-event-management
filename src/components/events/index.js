import React,{useEffect,useState} from "react";
import ChevronLeft from "../assets/chevron-left.svg";
import ChevronRight from "../assets/chevron-right.svg";
import Card from "./card";
import EventsBorderTop from "../assets/events-border-top.svg";
import EventsBorderBottom from "../assets/events-border-bottom.svg";
import "./index.css";
import { withTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";

const EventsSection = (props) => {
  const { t } = props;
  const [newsData,setNewsData] =useState([]);
  useEffect(()=>{
    // axios.get(`https://lomads.free.beeceptor.com/active-events`).then((res) => {
    //   const newsData = res.data;
    //   setNewsData(newsData);
    //   console.log("newsData", newsData);
    // });
  })
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
      <div style={{ marginTop: "30px" }} className="base">
            <div className="card-slider-container">
              <div className="card-container">
                <Carousel
                  showStatus={false}
                  showIndicators={false}
                  width="1004px"
                  renderArrowPrev={(cb) => (
                    <div className="arrow-icon right-icon" onClick={() => cb()}>
                      <img src={ChevronLeft} alt="ChevronLeft" height="37px" />
                    </div>
                  )}
                  renderArrowNext={(cb) => (
                    <div className="arrow-icon left-icon" onClick={() => cb()}>
                      <img
                        src={ChevronRight}
                        alt="ChevronRight"
                        height="37px"
                      />
                    </div>
                  )}
                  infiniteLoop={false}
                >
                  {newsData.map((news) => {
                    return (
                      <>
                        <Card newsInfo={news} className="marign-left" />
                      </>
                    );
                  })}
                </Carousel>
              </div>
              <div className="card-slider">
                {/* <div className="arrow-icon">
                  <img src={ChevronLeft} alt="ChevronLeft" height="37px" />
                </div>
                <div className="arrow-icon">
                  <img src={ChevronRight} alt="ChevronRight" height="37px" />
                </div> */}
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
