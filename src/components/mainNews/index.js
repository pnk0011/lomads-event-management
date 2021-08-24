import React from "react";
import ChevronLeft from "../assets/chevron-left.svg";
import ChevronRight from "../assets/chevron-right.svg";
import MenuNavBar from "../menu/menuNavBar";
import Card from "../events/card";
import NewsBorderImg1 from "../assets/news-border-img1.svg";
import NewsOfficeImg from "../assets/news-office-img.png";
import NeNewsBorderImg from "../assets/news-border-img.png";
import FacebookLogo from "../assets/news-facebook-logo.svg";
import InstaLogo from "../assets/news-insta-logo.svg";
import TwitterLogo from "../assets/twitter-logo.svg";
import "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";

class MainNews extends React.Component {
  state = {
    newsData: [],
  };
  componentDidMount() {
    axios.get(`https://lomads.free.beeceptor.com/active-events`).then((res) => {
      const newsData = res.data;
      this.setState({ newsData });
      console.log("newsData", newsData);
    });
  }
  render() {
    return (
      <div>
        <div className="main-news">
          <div>
            <MenuNavBar />
          </div>

          <div>
            <div className="news-text">Ça ce passe chez Lomads</div>
            <div className="news-text1">
              Réservez un évènement dès maintenant
            </div>
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
                  {this.state.newsData.map((news) => {
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
          <div style={{ height: "100px" }}></div>

          <div className="news-border-img">
            <div>
              <img
                src={NewsBorderImg1}
                alt="borderImg"
                width="100%"
                style={{ marginBottom: "-5px", objectFit: "cover !important" }}
              />
            </div>
          </div>
        </div>
        <div className="bottom-col">
          <div className="news-img-sec">
            <div className="left-col-text">Actualités</div>
            <div>
              <div className="card-img-div"></div>
              <div className="card-img-div"></div>
              <div className="card-img-div"></div>
            </div>

            <div className="partner-button">
              <button className="devenir-lomads-button">
                DEMANDER LA DÉMO
              </button>
            </div>
          </div>
          <div className="news-img-sec">
            <div className="left-col-text">
              Les derniers groupes et évènements
            </div>
            <div>
              <div className="card-div">
                <img
                  src={NewsOfficeImg}
                  alt="cardImage"
                  width="80px"
                  height="80px"
                />
                <div className="img-container1">
                  <div>
                    <div className="img-desc-text1">Évènement Title </div>
                    <div className="img-desc-text2">Description</div>
                    <div style={{ display: "flex" }}>
                      <div className="tags">Categorie 1</div>
                      <div className="tags">Categorie 1</div>
                      <div className="tags">Categorie 1</div>
                    </div>
                  </div>
                  <div className="tag-div">
                    <div className="tag-date">02/11/2021 </div>
                    <div className="tag-time">10h-12h</div>
                  </div>
                </div>
              </div>
              <div className="card-div">
                <img
                  src={NewsOfficeImg}
                  alt="cardImage"
                  width="80px"
                  height="80px"
                />
                <div className="img-container1">
                  <div>
                    <div className="img-desc-text1">Évènement Title </div>
                    <div className="img-desc-text2">Description</div>
                    <div style={{ display: "flex" }}>
                      <div className="tags">Categorie 1</div>
                      <div className="tags">Categorie 1</div>
                      <div className="tags">Categorie 1</div>
                    </div>
                  </div>
                  <div className="tag-div">
                    <div className="tag-date">02/11/2021 </div>
                    <div className="tag-time">10h-12h</div>
                  </div>
                </div>
              </div>
              <div className="card-div">
                <img
                  src={NewsOfficeImg}
                  alt="cardImage"
                  width="80px"
                  height="80px"
                />
                <div className="img-container1">
                  <div>
                    <div className="img-desc-text1">Évènement Title </div>
                    <div className="img-desc-text2">Description</div>
                    <div style={{ display: "flex" }}>
                      <div className="tags">Categorie 1</div>
                      <div className="tags">Categorie 1</div>
                      <div className="tags">Categorie 1</div>
                    </div>
                  </div>
                  <div className="tag-div">
                    <div className="tag-date">02/11/2021 </div>
                    <div className="tag-time">10h-12h</div>
                  </div>
                </div>
              </div>
              <div className="card-div">
                <img
                  src={NewsOfficeImg}
                  alt="cardImage"
                  width="80px"
                  height="80px"
                />
                <div className="img-container1">
                  <div>
                    <div className="img-desc-text1">Évènement Title </div>
                    <div className="img-desc-text2">Description</div>
                    <div style={{ display: "flex" }}>
                      <div className="tags">Categorie 1</div>
                      <div className="tags">Categorie 1</div>
                      <div className="tags">Categorie 1</div>
                    </div>
                  </div>
                  <div className="tag-div">
                    <div className="tag-date">02/11/2021 </div>
                    <div className="tag-time">10h-12h</div>
                  </div>
                </div>
              </div>
              <div className="card-div">
                <img
                  src={NewsOfficeImg}
                  alt="cardImage"
                  width="80px"
                  height="80px"
                />
                <div className="img-container1">
                  <div>
                    <div className="img-desc-text1">Évènement Title </div>
                    <div className="img-desc-text2">Description</div>
                    <div style={{ display: "flex" }}>
                      <div className="tags">Categorie 1</div>
                      <div className="tags">Categorie 1</div>
                      <div className="tags">Categorie 1</div>
                    </div>
                  </div>
                  <div className="tag-div">
                    <div className="tag-date">02/11/2021 </div>
                    <div className="tag-time">10h-12h</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="partner-button">
              <button className="news-button">AFFICHER PLUS</button>
            </div>
          </div>
        </div>
        <div>
          <img src={NeNewsBorderImg} alt="BorderImage" width="100%" />
        </div>
        <div className="border-bottom-div">
          <div className="border-text">Pensez à nous suivre !</div>

          <div className="logo-container">
            <div>
              <div className="logo-wrapper">
                <div className="logo-div">
                  <img
                    src={FacebookLogo}
                    alt="facebooklogo"
                    width="80px"
                    height="80px"
                  />
                </div>
                <div className="logo-div">
                  <img
                    src={InstaLogo}
                    alt="facebooklogo"
                    width="80px"
                    height="80px"
                  />
                </div>

                <div className="logo-div">
                  <img
                    src={TwitterLogo}
                    alt="facebooklogo"
                    width="80px"
                    height="80px"
                  />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <div className="footer-text1">
                FAQ Mentions légales Raison d’être lomads maker News nous
                rejoindre
              </div>
              <div className="footer-text2">
                Site développé par Naman, design graphique Zélie Dethorey
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainNews;
