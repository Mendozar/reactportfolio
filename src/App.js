import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Wrapper>
      <Router>
      <div>
        <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
    </Wrapper>
  )
}

export default App;
