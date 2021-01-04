import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Portraits from "./pages/Portraits";
import PageProvider from "./context/pageContext";

function App() {
  return (
    <PageProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/faces" component={Portraits} />
        </Switch>
      </Router>
    </PageProvider>
  );
}

export default App;
