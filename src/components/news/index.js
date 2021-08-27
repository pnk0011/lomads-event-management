import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";

const NewsSection = (props) => {
  const { t } = props;
  const [blogData, setBlogData] = useState([
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
  return (
    <div className="news-section">
      <div className="news-desc">
        <p className="news-desc-text">{t("LatestNews")}</p>
      </div>
      <div className="news-img-container">
        {blogData.map((blog) => {
          return (
            <div
              className="news-img"
              style={{
                backgroundImage: `url(${blog.thumbnail_img})`,
              }}
            ></div>
          );
        })}
      </div>
      <div className="diff-sec-button">
        <button className="devenir-lomads-button">{t("MORENEWS")}</button>
      </div>

      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default withTranslation()(NewsSection);
