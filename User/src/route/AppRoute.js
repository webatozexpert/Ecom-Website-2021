import React, {Component,Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import UserOnboardPage from "../pages/UserOnboardPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>

                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/onboard" component={UserOnboardPage}/>
                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;