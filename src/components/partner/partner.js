import React from "react";
import PartnerImg1 from "../assets/partner-img1.png";
import PartnerImg2 from "../assets/partner-img2.png";
import PartnerImg3 from "../assets/partner-img3.png";
import PartnerImg4 from "../assets/partner-img4.svg";
import PartnerBottomImg1 from "../assets/partner-bottom-img1.png";
import PartnerBottomImg2 from "../assets/partner-bottom-img2.png";
import PartnerBottomImg3 from "../assets/partner-bottom-img3.png";
import PartnerBottomImg4 from "../assets/partner-bottom-img4.png";
import PartnerImg5 from "../assets/partner-img5.png";
import PartnerImg6 from "../assets/partner-img6.png";
import PartnerImg7 from "../assets/partner-img7.png";
import Footer from "../footer";

import "./partner.css";

function Explore() {
  return (
    <div className="partner">
      <div>
        <div>
          <div className="partner-text">Organisez, rencontrez, animez</div>
          <div className="partner-text">Rejoignez-nous comme partenaire !</div>
        </div>
        <div className="partner-container" style={{ marginTop: "70px" }}>
          <div className="left-colm">
            <div>
              <img
                src={PartnerImg1}
                alt="partnerImg"
                width="366px"
                height="598px"
              />
            </div>
            <div style={{ marginTop: "240px" }}>
              <img
                src={PartnerImg3}
                alt="partnerImg"
                width="366px"
                height="598px"
              />
            </div>
          </div>
          <div className="left-colm">
            <div className="partner-sec1" style={{ marginTop: "180px" }}>
              <img src={PartnerImg5} alt="partnerImg" />
              <div>
                <div className="partner-text1">Organisez vos événements en</div>
                <div className="partner-text1">toute simplicité</div>
              </div>
              <div className="partner-text2">
                créez des événements, paramétrez des notifications comme des
                rappels automatiques, et utilisez notre puissante interface de
                messagerie instantanée.
              </div>
            </div>
            <div className="partner-sec1" style={{ marginTop: "100px" }}>
              <img src={PartnerImg6} alt="partnerImg" />
              <div>
                <div className="partner-text1">Restez proche de votre</div>
                <div className="partner-text1">communauté</div>
              </div>
              <div className="partner-text2">
                entretenez des liens étroits avec votre communauté en organisant
                facilement des événements, en les invitant à choisir les dates
                ou les tranches horaires ou encore en créant des groupes faciles
                à gérer.
              </div>
            </div>
            <div className="partner-sec1" style={{ marginTop: "100px" }}>
              <img src={PartnerImg7} alt="partnerImg" />
              <div>
                <div className="partner-text1">Créez des communautés</div>
                <div className="partner-text1">hyperlocales</div>
              </div>
              <div className="partner-text2">
                en indiquant un emplacement lorsque vous créez un groupe ouvert,
                celui-ci apparaîtra dans la liste des « Nouveautés à proximité »
                pour tous les utilisateurs se trouvant dans un rayon de 5 km.
              </div>
            </div>
            <div className="partner-button">
              <button className="devenir-lomads-button">
                DEMANDER LA DÉMO
              </button>
            </div>
          </div>
          <div className="left-colm">
            <div style={{ marginTop: "240px" }}>
              <img
                src={PartnerImg2}
                alt="partnerImg"
                width="366px"
                height="598px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="partner-bottom-sec">
        <div className="partner-background-img">
          <img src={PartnerImg4} alt="backgroundImage" width="100%" />
        </div>
        <div className="partner-text3">Notre succès : votre succès</div>
        <div className="partner-text4">
          Bénéficiez de l’assistance de l’équipe Lomads
        </div>
        <div className="partner-text5">
          <div style={{ width: "45%" }}>
            appuyez-vous sur l’expérience et le soutien logistique de nos
            consultants. Que ce soit pour mettre en œuvre vos idées, réaliser
            vos évènements, faire vivre votre communauté ou améliorer votre
            stratégie marketing, vous pouvez compter sur nous.
          </div>
        </div>
        <div className="partner-button">
          <button className="partner-bottom-button">PRENDRE RENDEZ-VOUS</button>
        </div>
        <div className="partner-bottom-imgs">
          <div className="bottom-img-margin">
            <img
              src={PartnerBottomImg1}
              alt="partnerImg"
              height="350px"
              width="350px"
              className="border-round"
            />
          </div>
          <div className="bottom-img-margin">
            <img
              src={PartnerBottomImg2}
              alt="partnerImg"
              height="350px"
              width="350px"
              className="border-round"
            />
          </div>
          <div className="bottom-img-margin">
            <img
              src={PartnerBottomImg3}
              alt="partnerImg"
              height="350px"
              width="350px"
              className="border-round"
            />
          </div>
          <div className="bottom-img-margin">
            <img
              src={PartnerBottomImg4}
              alt="partnerImg"
              height="350px"
              width="350px"
              className="border-round"
            />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Explore;
