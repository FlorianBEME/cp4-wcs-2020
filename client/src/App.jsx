import "./App.css";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import RouteVisitor from "./components/router/RouteVisitor";
import RouteAdmin from "./components/router/RouteAdmin";
import Fulllayout from "./components/admin/dashboard/layouts/fulllayout";
import layout from "./components/visitor/view/layout";
import RouteLogin from './components/router/RouteLogin';
import LogIn from './components/login/Login';

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Switch>
          <RouteVisitor exact path="/" component={layout} />
          <RouteLogin path="/login" component={LogIn} isAuth={token} />
          <RouteAdmin path="/panel" component={Fulllayout} isAuth={token} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
