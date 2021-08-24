import React from "react";

import NavBar from "../nav-bar";
import Explore from "../explore";
import CommentSection from "../comment";
import DifferenceSection from "../differenceSection";
import EventsSection from "../events";
import NewsSection from "../news";
import ContactUsSection from "../contactUs";
import Footer from "../footer";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <Explore />
        <CommentSection />
        <DifferenceSection />
        <EventsSection />
        <NewsSection />
        <ContactUsSection />
        <Footer />
      </div>
    );
  }
}

export default Home;
