import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import HomeMaster from "./components/Home/HomeMaster";
import LoginMaster from "./components/Login/LoginMaster";
import RegisterMaster from "./components/Register/RegisterMaster";
import UnitAphabet from "./components/UnitAphabet/UnitAphabet";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route component={HomeMaster} path="/home" exact/>
                <Route component={LoginMaster} path="/login" exact/>
                <Route component={RegisterMaster} path="/register" exact/>
                <Route component={UnitAphabet} path="/unit-aphabet" exact/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
