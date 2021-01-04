import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageProvider from "./context/pageContext";

// page/component imports
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Portraits from "./pages/Portraits";
import BigImg from "./components/BigImg";

function App() {
  return (
    <PageProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faces" component={Portraits} />
          <Route path="/faces/:id" component={BigImg} />
        </Switch>
      </Router>
    </PageProvider>
  );
}

export default App;
