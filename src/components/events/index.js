import React, { useEffect, useState } from "react";
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
  const [newsData, setNewsData] = useState([
    {
      event_title: "Day Trip to Auvers sur Oise",
      event_venue_short: "Paris",
      event_venue_long:
        "Gare du Nord, 18 Rue de Dunkerque, 75010 Paris, France",
      start_date: "13/08/2021",
      start_time: "12h00",
      end_time: "19h00",
      ticket_price: "23",
      thumbnail_img:
        "https://drive.google.com/uc?id=1V2mYz0W4SIfxQMZjsMGuC0_24Gf_Jr4v",
      duration: "",
    },
    {
      event_title: "Paint & Drink Apero Session: Vin & van Gogh",
      event_venue_short: "Paris",
      event_venue_long: "Port Debilly, Paris",
      start_date: "15/08/2021",
      start_time: "18h00",
      end_time: "20h00",
      ticket_price: "Free",
      thumbnail_img:
        "https://drive.google.com/uc?id=13lNsaeX2jVeEKv7vL2yHzoQh-S43ySci",
      duration: "",
    },
    {
      event_title: "Acoustic Jam Session",
      event_venue_short: "Paris",
      event_venue_long: "Tennessee, 12 Rue André Mazet, 75006 Paris",
      start_date: "15/08/2021",
      start_time: "19h00",
      end_time: "21h00",
      ticket_price: "Free",
      thumbnail_img:
        "https://drive.google.com/uc?id=1NagWQEoRfEiGN4Ae703UyYk8-YrNpVMm",
      duration: "",
    },
    {
      event_title: "Un Jour Sans Fin Comedy Club",
      event_venue_short: "Paris",
      event_venue_long: "La base, 31 Rue Bichat, 75010 Paris",
      start_date: "21/08/2021",
      start_time: "19h00",
      end_time: "21h00",
      ticket_price: "Free",
      thumbnail_img:
        "https://drive.google.com/uc?id=1BulgJQn0UOJYRzePHi5Oz8znO9rfxolf",
      duration: "",
    },
    {
      event_title: "Young Fashion Creator's Pop Up",
      event_venue_short: "Paris",
      event_venue_long: "4 Rue Pastourelle, 75003 Paris",
      start_date: "28/08/2021",
      start_time: "11h00",
      end_time: "19h00",
      ticket_price: "Free",
      thumbnail_img:
        "https://drive.google.com/uc?id=1TgAlNBzduWSc95Iob6zKm2NRIWp3uf0y",
      duration: "",
    },
  ]);
  useEffect(() => {
    // axios.get(`https://lomads.free.beeceptor.com/active-events`).then((res) => {
    //   const newsData = res.data;
    //   setNewsData(newsData);
    //   console.log("newsData", newsData);
    // });
  });
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
        <div className="card-slider-container-event">
          <div className="card-container-event">
            <Carousel
              showStatus={false}
              showIndicators={false}
              width="1004px"
              renderArrowPrev={(cb) => (
                <div
                  className="arrow-icon-event right-icon-event"
                  onClick={() => cb()}
                >
                  <img src={ChevronLeft} alt="ChevronLeft" height="37px" />
                </div>
              )}
              renderArrowNext={(cb) => (
                <div
                  className="arrow-icon-event left-icon-event"
                  onClick={() => cb()}
                >
                  <img src={ChevronRight} alt="ChevronRight" height="37px" />
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
          <div className="card-slider-events">
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
