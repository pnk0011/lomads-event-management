import React from "react";
import Menu from "../assets/menu.svg";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "../assets/pnk-logo.svg";
import { withTranslation } from "react-i18next";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "en",
    };
  }
  onLanguageHandle = (lan) => {
    let newLang = lan;
    this.setState({ value: newLang });
    this.props.i18n.changeLanguage(newLang);
  };

  render() {
    const { t } = this.props;
    return (
      <div className="nav">
        <div className="nav__left">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} className="nav-logo__image" alt="Logo" />
            </Link>
          </div>
          <span className="nav-tagline">{t("navBarText")}</span>
        </div>

        <div className="nav__right">
          <div className="nav-lang">
            <span
              className="nav-fr lng"
              onClick={() => this.onLanguageHandle("fr")}
            >
              FR
            </span>
            <div className="nav-seprator"></div>
            <span
              className="nav-eng lng"
              onClick={() => this.onLanguageHandle("en")}
            >
              ENG
            </span>
          </div>
          <div className="nav-menu">
            <div className="menu-text">MENU</div>
            <div style={{ marginLeft: "22px", cursor: "pointer" }}>
              <Link to="/menu">
                <img src={Menu} alt="menu" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(NavBar);
