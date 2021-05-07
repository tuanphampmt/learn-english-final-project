import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import StartMaster from "./components/start/StartMaster";
import HomePage from "./components/home/HomePage";
import ChangeAvatar from "./components/changeAvatar/ChangeAvatar";
import LoginMaster from "./components/login/LoginMaster";
import RegisterMaster from "./components/register/RegisterMaster";
import UnitAphabet from "./components/unit-aphabet/UnitAphabet";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route component={StartMaster} path="/home" exact/>
                <Route component={LoginMaster} path="/login" exact/>
                <Route component={HomePage} path="/homePage" exact/>
                <Route component={ChangeAvatar} path="/changeAvatar" exact/>
                <Route component={RegisterMaster} path="/register" exact/>
                <Route component={UnitAphabet} path="/unit-aphabet" exact/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
