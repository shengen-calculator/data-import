import React from "react";
import './sass/main.scss';
import Home from './components/home/HomePage';
import Vendors from './components/provider/ProviderListPage';
import Vendor from './components/provider/ProviderEditPage';
import Transfers from './components/transfer/TransferLogPage';
import ReadyToTransfer from './components/transfer/ReadyToTransferPage';
import VendorLog from './components/import/ProviderLogPage';
import Log from './components/import/ImportLogPage';
import LogIn from './components/auth/LoginPage';
import {
    Link,
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import {connect} from "react-redux";
import {logoutRequest} from "./redux/actions/authenticationActions";

function App(props) {
    const {auth, logoutRequest} = props;
    return (
        <Router>


            {auth.userId &&<header id="header">
                <Link className="logo" to="/">Головна</Link>
                <nav>
                    <a href={"#menu"} onClick={logoutRequest}>Вийти</a>
                </nav>
            </header>}

            <Switch>
                <PrivateRoute path="/provider/:id/log" auth={auth}>
                    <VendorLog/>
                </PrivateRoute>
                <PrivateRoute path="/provider/:id" auth={auth}>
                    <Vendor/>
                </PrivateRoute>
                <PrivateRoute path="/provider" auth={auth}>
                    <Vendor/>
                </PrivateRoute>
                <PrivateRoute path="/providers" auth={auth}>
                    <Vendors/>
                </PrivateRoute>
                <PrivateRoute path="/transfers" auth={auth}>
                    <Transfers/>
                </PrivateRoute>
                <PrivateRoute path="/imported" auth={auth}>
                    <ReadyToTransfer/>
                </PrivateRoute>
                <Route path="/login">
                    <LogIn/>
                </Route>
                <PrivateRoute path="/log" auth={auth}>
                    <Log/>
                </PrivateRoute>
                <PrivateRoute path="/" auth={auth}>
                    <Home/>
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

function mapStateToProps(state) {
    return {
        auth: state.authentication
    }
}

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = {
    logoutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
