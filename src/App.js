import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

const Home = lazy(() => import("./components/home"));
const Menu = lazy(() => import("./components/menu"));
const Partner = lazy(() => import("./components/partner"));
const MainNews = lazy(() => import("./components/mainNews"));
const Rejoin = lazy(() => import("./components/rejoin"));
const Quality = lazy(() => import("./components/quality"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={null}>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/partner" component={Partner} />
          <Route path="/news" component={MainNews} />
          <Route path="/rejoin" component={Rejoin} />
          <Route path="/quality" component={Quality} />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
