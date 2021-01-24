import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageContext } from "./context/pageContext";

// page/component imports
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Faces from "./pages/Faces";
import BigImg from "./components/BigImg";
import Places from "./pages/Places";
import Events from "./pages/Events";
import Collection from "./components/Collection";

function App() {
  const { rootPath } = useContext(PageContext);
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faces" component={Faces} />
        <Route path="/faces/:id" component={BigImg} />
        <Route exact path="/places" component={Places} />
        <Route path={`${rootPath}/:directory/:id`} component={BigImg} />
        <Route exact path="/events" component={Events} />
        <Route path={`${rootPath}/:directory`} component={Collection} />
      </Switch>
    </Router>
  );
}

export default App;
