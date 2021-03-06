import React from "react";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Meldin | Home</title>
      </Helmet>
      <Router>
        <Switch>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
