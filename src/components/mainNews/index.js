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
import CalanderIcon from "../assets/calander-icon.png";
import FootballIcon from "../assets/football-icon.png";
import "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";

class MainNews extends React.Component {
  state = {
    newsData: [
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
    ],
    blogsData: [
      {
        title: "LomArt Exhibition: Colour Theory",
        type: "video",
        url: "https://www.youtube.com/watch?v=rTuatfZo2X0",
        poster_image:
          "https://drive.google.com/file/d/1I-_x9wnaAY4uwb_kgtt5O5M-yD-H9so1/view?usp=sharing",
      },
      {
        title: "Les réseaux sociaux : dangers et opportunités",
        type: "blog",
        url: "https://lomads.medium.com/les-r%C3%A9seaux-sociaux-dangers-et-opportunit%C3%A9s-2378b0addce5",
        poster_image:
          "https://drive.google.com/file/d/19BYY6_VItBMBTxtzgr-mvJkuK3jlcuqG/view?usp=sharing",
      },
      {
        title:
          "Paris Filmmakers Collective // Cohort #1 Film Shoot - Behind the Scenes",
        type: "video",
        url: "https://www.youtube.com/watch?v=SPp6wiBv6_A",
        poster_image:
          "https://drive.google.com/file/d/1UV5uXDnLXWZxM7CaRkWaUB4DAavDFGCD/view?usp=sharing",
      },
      {
        title: "A New Twist in The Social Media Tale",
        type: "blog",
        url: "https://lomads.medium.com/a-new-twist-in-the-social-media-tale-b895c34f9d97",
        poster_image:
          "https://drive.google.com/file/d/1TwMRtbrz1EJ_OQezoD9xfi9D7Ps545H3/view?usp=sharing",
      },
      {
        title: "Eco Fashion Awards",
        type: "video",
        url: "https://www.youtube.com/watch?v=VPP5UWczdp4",
        poster_image:
          "https://drive.google.com/file/d/1XZPbg9m50qS5VRugZnhCquVlbYo14THa/view?usp=sharing",
      },
      {
        title:
          "Intercultural Couples share quirks and delights of their relationships",
        type: "video",
        url: "https://www.youtube.com/watch?v=2z4TV66eBtU",
        poster_image:
          "https://drive.google.com/file/d/1IKxJLZNuaown1ZuvrMMhoNHV3FGYxi_N/view?usp=sharing",
      },
      {
        title: "Small Business Pop-up 2",
        type: "video",
        url: "https://www.youtube.com/watch?v=8irOYC9YR5g",
        poster_image:
          "https://drive.google.com/file/d/1e3tLx5DlFHZxwB4Dn5qQR_HCRemDos-n/view?usp=sharing",
      },
      {
        title: "Your Primer to Sustainable Fashion",
        type: "blog",
        url: "https://lomads.medium.com/your-primer-to-sustainable-fashion-3bdf46986862",
        poster_image:
          "https://drive.google.com/file/d/1PGmfe-mzpaR2Z0XoJ5E7Y4xaFM-rk_Ys/view?usp=sharing",
      },
      {
        title: "Why are We so Afraid of Everything That is New?",
        type: "blog",
        url: "https://lomads.medium.com/why-are-we-so-afraid-of-everything-that-is-new-22ea1abfb8d1",
        poster_image:
          "https://drive.google.com/file/d/1bdFtEwL3-gWXxITfMitM9MxL41NceQh3/view?usp=sharing",
      },
    ],
    pastEvents: [
      {
        title: "Small Biz Pop-up Market",
        type: "event",
        description:
          "Products from 14 creatives and small-business owners were on display",
        start_date: "28/08/2021",
        start_time: "11h00",
        end_time: "19h00",
        tags: "Shopping, Cause, Sustainability",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
      {
        title: "Paris Filmmakers' Collective",
        type: "group",
        description:
          "Collective of filmmakers and actors, both professionals and enthusiasts, who not only talk about filmmaking about make films together",
        start_date: "",
        start_time: "",
        end_time: "",
        tags: "Filmmaking, Creative",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
      {
        title: "LomArt Exhibition",
        type: "event",
        description:
          "An immersive art exhibition featuring nine international artists with varied techniques and media and six musicians playing live at different times",
        start_date: "25/07/2021",
        start_time: "12h00",
        end_time: "20h00",
        tags: "",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
      {
        title: "Military Style Bootcamp in Open Air",
        type: "event",
        description:
          "A military style boot-camp in Bois de Boulogne by the large waterfall",
        start_date: "29/05/2021",
        start_time: "11h00",
        end_time: "12h30",
        tags: "",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
      {
        title: "Eco Fashion Award",
        type: "event",
        description:
          'Teams consisting of photographers, sustainable fashion brands, makeup artists and models competed in a 4 hour action-packed challenge to "Create a fashion magazine cover"',
        start_date: "04/06/2021",
        start_time: "13h00",
        end_time: "19h00",
        tags: "",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
      {
        title: "La Bibliophilie",
        type: "group",
        description: "Fortnightly meetup of female book-lovers in Paris",
        start_date: "",
        start_time: "",
        end_time: "",
        tags: "Books, Discussion Forum",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
      {
        title: "Inter-Cultural Couple Apero",
        type: "event",
        description:
          "Social event for intercultural couples with a custom-designed game to get to know each other better and on the side-lines, interview for our YouTube channel; answering questions about cultural diversity and nuances.",
        start_date: "20/06/2021",
        start_time: "16h00",
        end_time: "18h00",
        tags: "Expat, Inter-cultural, Social",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
      {
        title: "Acoustic Jam Session",
        type: "event",
        description:
          "Lomads' Open Jams are great for musicians who are interested in networking with other like-minded artists, from beginners to professionals in all genres",
        start_date: "10/07/2021",
        start_time: "19h00",
        end_time: "21h30",
        tags: "Musicians, Jamming, Networking",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
      {
        title: "Melange - Creative Catchups",
        type: "group",
        description:
          "Mélange is a monthly meet-up that gives creatives a space to network and to co-create",
        start_date: "",
        start_time: "",
        end_time: "",
        tags: "Creative, Freelancers, Networking",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
      {
        title: "Paint & Drink Apero Session: Vin & van Gogh",
        type: "event",
        description:
          "Paint in a scenic location while enjoying some good wine. We provide all the material, you just unleah your inner artist",
        start_date: "20/07/2021",
        start_time: "17h00",
        end_time: "19h30",
        tags: "Painting, Food & Drinks",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
      {
        title: "Montmartre Treasure Hunt",
        type: "event",
        description:
          "A treasure hunt in the magnificent quartier of Montmartre",
        start_date: "10/09/2021",
        start_time: "16h00",
        end_time: "18h00",
        tags: "Fun, Social",
        thumbnail_img:
          "https://drive.google.com/uc?id=1O-suGDsho8noaFnM0Kfl0CSx-c1IotQ9",
      },
    ],
  };
  componentDidMount() {
    // axios.get(`https://lomads.free.beeceptor.com/active-events`).then((res) => {
    //   const newsData = res.data;
    //   this.setState({ newsData });
    //   console.log("newsData", newsData);
    // });
    // axios.get(`https://lomads.free.beeceptor.com/active-events`).then((res) => {
    //   const newsData = res.data;
    //   this.setState({ newsData });
    //   console.log("newsData", newsData);
    // });
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
          <div className="news-img-sec-blogs">
            <div className="left-col-text">Actualités</div>
            <div className="blogs-section">
              {this.state.blogsData.map((blog) => {
                return (
                  <>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={blog.url}
                    >
                      <div className="card-img-div">
                        <div className="blog-title-text">{blog.title}</div>
                      </div>
                    </a>
                  </>
                );
              })}
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
            <div className="post-events-cards">
              {this.state.pastEvents.map((pastEvent) => {
                const tagsData = pastEvent.tags.split(",");
                console.log({ tagsData });
                return (
                  <div className="card-div">
                    <img
                      src={pastEvent.thumbnail_img}
                      alt="cardImage"
                      width="80px"
                      height="80px"
                      className="main-news-img"
                      style={{ objectFit: "contain !important" }}
                    />
                    <div className="img-container1">
                      <div>
                        <div className="img-desc-text1">{pastEvent.title} </div>
                        <div className="img-desc-text2">
                          {pastEvent.description}
                        </div>
                        {tagsData.length > 1 && (
                          <div style={{ display: "flex" }}>
                            {tagsData.map((tag) => {
                              return <div className="tags">{tag}</div>;
                            })}
                          </div>
                        )}
                      </div>
                      {pastEvent.start_date !== "" && (
                        <div className="calander-icon-div">
                          <div className="tag-div">
                            <div className="tag-date">
                              {pastEvent.start_date}
                            </div>
                            <div className="tag-time">
                              {pastEvent.start_time}-{pastEvent.end_time}
                            </div>
                          </div>
                          <div style={{ marginLeft: "10px" }}>
                            <img
                              src={CalanderIcon}
                              alt="calander"
                              height="16px"
                              width="12px"
                            />
                          </div>
                        </div>
                      )}
                      {pastEvent.start_date === "" && (
                        <div className="football-icon-div">
                          <img
                            src={FootballIcon}
                            alt="calander"
                            height="25px"
                            width="25px"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
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
