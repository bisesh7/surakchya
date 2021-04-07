import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeComponent from "./Components/Home/HomeComponent";
import SigninComponent from "./Components/SigninComponent";
import RegisterComponent from "./Components/RegisterComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/signin" component={SigninComponent} />
          <Route path="/register" component={RegisterComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
