import React from "react";
import QualityImg1 from "../assets/quality-cover-img.png";
import QualityBorderImg from "../assets/quality-border-img.svg";
import QualityImg01 from "../assets/quality-img1.png";
import QualityImg02 from "../assets/quality-img2.png";
import QualityImg03 from "../assets/quality-img3.png";
import QualityImg04 from "../assets/quality-img4.png";
import QualityImg05 from "../assets/quality-img5.svg";
import QualityImg06 from "../assets/quality-img6.svg";
import PartnerImg2 from "../assets/partner-img1.png";
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
        <div className="quality-sec">
          <div>
            <div className="rejoin-text">L’esprit Lomads</div>

            <div className="rejoin-text2">
              <div className="text-wrapper">
                Nous nous connaissons depuis plus de dix ans. D’abord collègues
                avant de devenir amis, nous sommes restés proches même lorsque
                nous avons déménagé dans des villes différentes, en Inde mais
                aussi au Japon et en Europe. Nous étions heureux de nous
                retrouver en France, en 2020 pour commencer l’aventure Lomads.
              </div>
            </div>
          </div>
          <div className="quality-img">
            <div>
              <div className="quality-back-001"></div>
              <img
                src={QualityImg1}
                alt="borderImg"
                width="324px"
                height="231px"
                clas
                sName="img-border"
              />
              <div className="quality-back-001"></div>
            </div>
          </div>
          <div className="img-bottom-text">
            <div className="rejoin-text3">
              Paris comme premier terrain de jeu
            </div>

            <div className="rejoin-text2">
              <div className="text-wrapper">
                Paris est le lieu idéal pour lancer Lomads. Avec son riche
                patrimoine historique et culturel, Paris est une ville à taille
                humaine qui vit au rythme de ses arrondissements, de ses
                quartiers même, des véritables villages dans la ville, avec
                leurs boutiques, leurs cafés et leurs restaurants. Elle est donc
                particulièrement adaptée à la création de
                communautés hyperlocales.
              </div>
            </div>
          </div>
          <div>
            <div className="quality-background-img1">
              <div>
                <img
                  src={QualityBorderImg}
                  alt="QualityBorder"
                  className="border-margin"
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div className="quality-colm">
            <div>
              <div className="rejoin-img1">
                <div>
                  <div className="rejoin-img3" style={{ marginLeft: "-35px" }}>
                    <img src={QualityImg01} alt="ImageRejoin" height="350px" />
                  </div>
                </div>
              </div>
              <div className="rejoin-img1" style={{ marginTop: "90px" }}>
                <div>
                  <div className="rejoin-img3" style={{ marginLeft: "-35px" }}>
                    <img src={QualityImg03} alt="ImageRejoin" height="350px" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="quality-text4 align-text4">Nos valeurs</div>
              <div className="quality-text6">
                <div className="quality-text4">Confiance</div>
                <div className="quality-text5">
                  créons des cercles de confiance où nous pouvons compter les
                  uns sur les autres, évoluer dans une communauté dont les
                  membres se connaissent et s’acceptent tels qu’ils sont.
                  Recréons l’esprit des villages au cœur de nos grandes villes
                  modernes !
                </div>
              </div>
              <div className="quality-text6">
                <div className="quality-text4">Éthique</div>
                <div className="quality-text5">
                  nous sommes tous différents, et nous avons chacun nos
                  opinions. Chez Lomads nous avons l’ambition de nous démarquer
                  par notre bon jugement dans l’accomplissement de notre
                  mission.
                </div>
              </div>
              <div className="quality-text6">
                <div className="quality-text4">Spontanéité</div>
                <div className="quality-text5">
                  nous sommes tous différents, et nous avons chacun nos
                  opinions.
                </div>
              </div>
              <div className="quality-text6">
                <div className="quality-text4">Respect</div>
                <div className="quality-text5">
                  nous sommes tous différents, et nous avons chacun nos
                  opinions.
                </div>
              </div>
            </div>
            <div>
              <div className="rejoin-img1" style={{ marginTop: "90px" }}>
                <div>
                  <div className="rejoin-img3">
                    <img src={QualityImg02} alt="ImageRejoin" height="450px" />
                  </div>
                </div>
              </div>
              <div className="rejoin-img1" style={{ marginTop: "90px" }}>
                <div>
                  <div className="rejoin-img3" style={{ marginLeft: "73px" }}>
                    <img src={QualityImg04} alt="ImageRejoin" height="450px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="quality-back-img05">
            {/* <img
                      src={QualityImg05}
                      alt="ImageRejoin"
                      height="350px"
                      width="350px"
                    /> */}
          </div>
          <div className="quality-video-div">
            {/* <div class="line1"></div>
            <div class="line2"></div> */}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Rejoin;
