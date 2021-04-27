import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomeMaster from "./components/home/HomeMaster";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route component={HomeMaster} path="/home" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
