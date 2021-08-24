import React from "react";
import RejoinBorderImg1 from "../assets/rejoin-border-img1.svg";
import RejoinBorderImg2 from "../assets/rejoin-border-img2.svg";
import RejoinImg1 from "../assets/rejoin-img1.png";
import RejoinImg2 from "../assets/rejoin-img2.png";
import RejoinImg3 from "../assets/rejoin-img3.svg";
import RejoinImg4 from "../assets/rejoin-img4.svg";
import RejoinImg5 from "../assets/rejoin-img5.svg";
import RejoinImg6 from "../assets/rejoin-img6.svg";
import RejoinImg7 from "../assets/rejoin-img7.svg";
import ImgUrl6 from "../assets/suggestion-img3.svg";
import Footer from "../footer";
import ImgUrl1 from "../assets/explore-bottom-img1.svg";
import NavBar from "../nav-bar";
import "./index.css";

class Rejoin extends React.Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <div className="rejoin-sec">
          <div>
            <div className="rejoin-text">Nous rejoindre</div>
            <div className="rejoin-text1">
              <div className="text-wrapper">
                Lomads est à la fois une plateforme événementielle et un réseau
                social disposant d’une équipe de conseil créatif.
              </div>
            </div>
            <div className="rejoin-text2">
              <div className="text-wrapper">
                Nous sommes une structure à taille humaine animée par un esprit
                de famille. Nous sommes en pleine expansion et recherchons des
                collaborateurs qui se distinguent par leur capacité d’analyse et
                leur créativité.
              </div>
            </div>
          </div>
          <div className="rejoin-backgroung-img">
            <div>
              <img src={RejoinBorderImg1} alt="borderImg" width="100%" />
            </div>
            <div className="border-img2">
              <img src={RejoinBorderImg2} alt="borderImg" width="100%" />
            </div>
          </div>
          <div style={{ marginTop: "5%" }}>
            <div className="rejoin-img1">
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  className="rejoin-yes"
                >
                  <div className="rejoin-text4">
                    Convaincus de l’importance des rencontres, des échanges et
                    du partage, ils/elles doivent surtout avoir envie de
                    participer à cette nouvelle expérience qui entend tirer le
                    meilleur des nouvelles technologies et de chacun d’entre
                    nous. Notre équipe jeune, dynamique et soudée vous offre
                    l’occasion de travailler dans une ambiance conviviale et
                    entouré de collègues prêts à vous aider.
                  </div>
                  <div className="rejoin-text3">
                    Nous étions incubé a Schoolab, Paris dans le « Starter
                    Program : Saison 11 (Oct 2020 – Avril 2021)»
                  </div>
                </div>
                <div className="rejoin-img2">
                  <img src={RejoinImg1} alt="ImageRejoin" height="500px" />
                </div>
              </div>

              <div>
                <div className="rejoin-img3">
                  <img src={RejoinImg2} alt="ImageRejoin" height="500px" />
                </div>
              </div>
            </div>
            <div className="middle-text">
              <div className="rejoin-text5">Notre éthique de travail</div>
              <div style={{ marginTop: "100px" }}>
                <div className="rejoin-img5">
                  <img src={RejoinImg3} alt="RejoinImg" />
                </div>
                <div className="align-rejoin-text">
                  <div className="rejoin-text6">Aller plus loin, ensemble</div>
                  <div className="rejoin-text7">
                    Nous aidons honnêtement les autres à s’épanouir et à être
                    remarquables. Pas d’ego.
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-text">
              <div>
                <div style={{ marginTop: "100px" }}>
                  <div className="rejoin-img5">
                    <img src={RejoinImg4} alt="RejoinImg" />
                  </div>
                  <div className="align-rejoin-text">
                    <div className="rejoin-text6">
                      Aller plus loin, ensemble
                    </div>
                    <div className="rejoin-text8">
                      Nous aidons honnêtement les autres à s’épanouir et à être
                      remarquables. Pas d’ego.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ marginTop: "100px" }}>
                  <div className="rejoin-img5">
                    <img src={RejoinImg5} alt="RejoinImg" />
                  </div>
                  <div className="align-rejoin-text">
                    <div className="rejoin-text6">
                      Aller plus loin, ensemble
                    </div>
                    <div className="rejoin-text8">
                      Nous aidons honnêtement les autres à s’épanouir et à être
                      remarquables. Pas d’ego.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ marginTop: "100px" }}>
                  <div className="rejoin-img5">
                    <img src={RejoinImg6} alt="RejoinImg" />
                  </div>
                  <div className="align-rejoin-text">
                    <div className="rejoin-text6">
                      Aller plus loin, ensemble
                    </div>
                    <div className="rejoin-text8">
                      Nous aidons honnêtement les autres à s’épanouir et à être
                      remarquables. Pas d’ego.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rejoin-img-bottom">
                <img src={RejoinImg7} alt="rejoinImg" />
              </div>
            </div>
            <div>
              <div className="rejoin-bott-text-align">
                <div className="rejoin-bott-text">
                  En rejoignant Lomads vous découvrirez un projet ambitieux et
                  plein de sens, qui vous offre un contexte stimulant, dans
                  lequel vous aurez un rôle prépondérant et la possibilité de
                  développer vos compétences.
                </div>
                <div className="partner-button">
                  <button className="partner-bottom-button">
                    VOIR LES POSTES À POURVOIR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Rejoin;
