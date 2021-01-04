import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageProvider from "./context/pageContext";

// page/component imports
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Faces from "./pages/Faces";
import BigImg from "./components/BigImg";
import Places from "./pages/Places";

function App() {
  return (
    <PageProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faces" component={Faces} />
          <Route path="/faces/:id" component={BigImg} />
          <Route path="/places" component={Places} />
        </Switch>
      </Router>
    </PageProvider>
  );
}

export default App;
