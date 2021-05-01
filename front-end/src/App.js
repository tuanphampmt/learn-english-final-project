import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import HomeMaster from "./components/home/HomeMaster";
import LoginMaster from "./components/login/LoginMaster";
import RegisterMaster from "./components/register/RegisterMaster";

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
            </Switch>
        </BrowserRouter>
    );
}

export default App;
