import React, {Component,Fragment} from 'react';
import {Button} from "react-bootstrap";
import {HashRouter} from "react-router-dom";
import AppRoute from "./route/AppRoute";

class App extends Component {
    render() {
        return (
            <Fragment>
                <HashRouter>
                    <AppRoute/>
                </HashRouter>
            </Fragment>
        );
    }
}

export default App;