import "./App.css";
import { Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Switch>
          <RouteVisitor exact path="/" component={Home} />
          {/* <RouteLogin path="/login" component={LogIn} isAuth={token} />
          <RouteAdmin path="/panel" component={Fulllayout} isAuth={token} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
